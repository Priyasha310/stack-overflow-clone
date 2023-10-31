require('dotenv').config();

const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json({limit:"10mb", extend: true}))

const authRouter = require('./routes/auth');

app.use('/auth', authRouter)
// app.use('/',)

const connectDB = require('./db/connect');
const port = process.env.port || 5000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{console.log(`Server listening on port ${port}`)});
    } catch (error) {
        console.log(error);
    }
}

start();