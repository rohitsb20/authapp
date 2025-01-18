import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_KEY)
.then(() => { console.log('Connected to database')})
.catch(() => {console.log("Connected failed to database")});










const app = express();
app.listen(3000, () => {console.log('Server is running on port 3000');
})