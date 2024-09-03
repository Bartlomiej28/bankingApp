import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();


router.put('/new-transaction', async (req, res) => {
    const { from, to, transferAmount, source } = req.body;
    const transferAmountNum = parseFloat(transferAmount);
    
    if (!from || !to || isNaN(transferAmountNum) || transferAmountNum <= 0 || !source) {
        return res.status(400).json({ message: "Brak wymaganych danych lub nieprawidłowa kwota transferu" });
    }

    try {
        const fromUser = await prisma.user.findUnique({ where: { id: from } });
        const toUser = await prisma.user.findUnique({ where: { email: to } });

        if (!fromUser || !toUser) {
            return res.status(404).json({ message: "Użytkownik nie znaleziony" });
        }

        if (source === "normal") {
            if (fromUser.amount < transferAmountNum) {
                return res.status(400).json({ message: "Niewystarczająca ilość środków" });
            }

            await prisma.user.update({ where: { id: from }, data: { amount: fromUser.amount - transferAmountNum } });
            await prisma.user.update({ where: { email: to }, data: { amount: toUser.amount + transferAmountNum } });
        } else {
            const fromCard = await prisma.card.findFirst({ where: { id: source } });
            
            if (!fromCard || fromCard.currentAmount < transferAmountNum) {
                return res.status(400).json({ message: "Niewystarczająca ilość środków na karcie" });
            }

            await prisma.card.update({ where: { id: source }, data: { currentAmount: fromCard.currentAmount - transferAmountNum } });
            await prisma.user.update({ where: { email: to }, data: { amount: toUser.amount + transferAmountNum } });
        }

        res.status(200).json({ message: "Transakcja zakończona sukcesem" });
    } catch (error) {
        console.error('Błąd podczas przetwarzania transakcji:', error.message);
        res.status(500).json({ message: 'Wystąpił błąd podczas przetwarzania transakcji.' });
    }
});



router.post('/transaction-notification', async (req, res) => {
    const { from, to, description, transferAmount } = req.body;
    const transferAmountNum = parseFloat(transferAmount);

    try {   
        await prisma.transaction.create({                       /*from - id    to -email*/
            data: {
                from: from,
                to: to,
                description: description,
                amount: transferAmountNum,
                type: 'loss'
            }
        });

        await prisma.transaction.create({
            data: {
                from: from,
                to: to,
                description: description,
                amount: transferAmountNum,
                type: 'gain'
            }
        });

        res.status(200).json({ message: "Powiadomienie zakończona sukcesem" });
    } catch (error) {
        console.error('Błąd podczas przetwarzania powiadomienia:', error.message);
        res.status(500).json({ message: 'Wystąpił błąd podczas przetwarzania powiadomienia.' });
    }
});


router.get('/transaction-history', async (req, res) => {
    const param1  = req.query.param1;
    const param2 = req.query.param2;
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        from: param1,
                        type: "loss"
                    },
                    {
                        to: param2,
                        type: "gain"
                    }
                ]
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        

        res.status(200).json(transactions);
    } catch (error) {
        console.error('Błąd podczas przetwarzania powiadomienia:', error.message);
        res.status(500).json({ message: 'Wystąpił błąd podczas przetwarzania powiadomienia.' });
    }
});

export default router;














/*
router.get('/transaction-history/:id/:email', async (req, res) => {
    const { id, email } = req.params;  // Prawidłowa ekstrakcja parametrów

    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    { to: email },  // Transakcje gdzie email użytkownika jest odbiorcą
                    { from: id }    // Transakcje gdzie ID użytkownika jest nadawcą
                ]
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json(transactions);  // Zwracanie transakcji jako JSON
    } catch (error) {
        console.error('Błąd podczas przetwarzania powiadomienia:', error.message);
        res.status(500).json({ message: 'Wystąpił błąd podczas przetwarzania powiadomienia.' });
    }
});

export default router;*/