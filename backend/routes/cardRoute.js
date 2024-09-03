import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post('/create-card', async (req, res) => {
    let newCard;
    try {
        const { totalAmount, cardOwner, cardName, cardNumber, color, cardOwnerID } = req.body;

     
        const amountNumber = Number(totalAmount);


        newCard = await prisma.card.create({
            data: {
                totalAmount: amountNumber,
                currentAmount: amountNumber,
                name: cardName,
                cardNumber: cardNumber,
                color: color,
                cardOwner: cardOwner,
                cardOwnerID: cardOwnerID  
            }
        });

    } catch (error) {
        console.error('Error creating card:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'Card created successfully', data: newCard });
});

router.get('/user-cards/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const cards = await prisma.card.findMany({
           where: {
               cardOwnerID: id
           }
        });

        if (!cards) {
            return res.status(404).json({ error: 'No cards found' });
        }

        res.status(200).json({ message: 'Cards fetched successfully', data: cards });
    } catch (error) {
        console.error('Error fetching cards:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



export default router;
