require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json({limit:"10mb", extend: true}))
app.use(cors());

const authRouter = require('./routes/auth');
const questionRouter = require('./routes/question');
const answerRouter = require('./routes/answer');

app.use('/user', authRouter)
app.use('/questions', questionRouter)
app.use('/answers', answerRouter)

const connectDB = require('./db/connect');
const port = process.env.port || 5000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{console.log(`Server listening on port ${port}`)});
    } catch (error) {
        console.log("Error in connecting to server: ", error);
    }
}

start();