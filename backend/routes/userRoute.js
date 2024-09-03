import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router();
const prisma = new PrismaClient();

router.post('/sign-up', async(req, res) =>{
    let newUser
    try {
        const {name, surename, email, password, thumbnail, address, ssnpesel} = req.body;
        newUser = await prisma.user.create({
            data:{
                name: name,
                surename: surename,
                address: address,
                ssnpesel: ssnpesel,
                email: email,
                password: password,
                thumbnail: thumbnail,
            }
        });

    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(201).json({ message: 'User created successfully', data: newUser });
})

router.post('/sign-in', async (req, res) => {
  try {
      const {email, password} = req.body
      const user = await prisma.user.findFirst({
          where: {
            email: email,
            password: password,
          }
          
        })
      if(user){
          return res.status(200).json(user)
      }else{
          return res.status(404).json({ message: 'User doesnt exist' });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/user/:id', async (req, res) => {
    const {id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where: {
              id: id
            }
            
          })
        if(user){
            return res.status(200).json(user)
        }else{
            return res.status(404).json({ message: 'User doesnt exist' });
        }
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
  });


router.get('/user/email/:email', async (req, res) => {
  const {email} = req.params
  try {
      const user = await prisma.user.findUnique({
          where: {
            email: email
          }
          
        })
      if(user){
          return res.status(200).json(user)
      }else{
          return res.status(404).json({ message: 'User doesnt exist' });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router