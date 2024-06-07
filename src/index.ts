
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import movieRoutes from './routes/movies';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL || '')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_API, credentials: true }));

app.use('/api', movieRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
