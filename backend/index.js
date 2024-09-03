import express from "express"
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import transactionRoute from './routes/transactionRoute.js'
import depositRoute from './routes/depositRoute.js'
import cardRoute from './routes/cardRoute.js'

const app = express();

app.use(express.json());

app.options('*', cors({
    origin: 'https://banking-app-xv2x-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin']
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://banking-app-xv2x-frontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Origin');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});
/*
app.use(
    cors({
        origin: 'https://banking-app-xv2x-frontend.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin']
    })
);
*/
app.listen(3000, ()=>{
    console.log("App is listening to port: 5000")
})


app.use('/', userRoute);

app.use('/transaction', transactionRoute);

app.use('/deposit', depositRoute);

app.use('/card', cardRoute);
