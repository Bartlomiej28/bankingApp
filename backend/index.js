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

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)
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
