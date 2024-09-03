import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/new-deposit', async (req, res) => {
  try {
    const { amount, endData, percent, duration, ownerID } = req.body;

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    if (!amount || !endData || !percent || !duration || !ownerID) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const user = await prisma.user.findUnique({
        where: { id: ownerID },
      });

    await prisma.user.update({
        where: { id: ownerID },
        data: { amount: user.amount - amount },
      });

    const newDeposit = await prisma.deposit.create({
      data: {
        ownerID: ownerID,
        amount: amount,
        percent: percent,
        duration: duration,
        endData: endData
      }
    });

    res.status(201).json({ message: 'Deposit created successfully', data: newDeposit });
  } catch (error) {
    console.error('Error creating deposit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

router.get('/user-deposits/:id', async (req, res) => {
    const {id} = req.params;
    let usersDeposits
    try {
        usersDeposits = await prisma.deposit.findMany({
            where:{
                ownerID: id
            }
        })
      res.status(201).json({ message: 'Deposits getted successfully', data:  usersDeposits});
    } catch (error) {
      console.error('Error getting deposit:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});