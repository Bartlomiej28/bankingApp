import express from "express"
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import transactionRoute from './routes/transactionRoute.js'
import depositRoute from './routes/depositRoute.js'
import cardRoute from './routes/cardRoute.js'

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'https://banking-app-xv2x-frontend.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
);

app.listen(3000, ()=>{
    console.log("App is listening to port: 5000")
})


app.use('/', userRoute);

app.use('/transaction', transactionRoute);

app.use('/deposit', depositRoute);

app.use('/card', cardRoute);
