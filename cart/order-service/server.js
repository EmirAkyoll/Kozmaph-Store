const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = process.env.PORT || 6000;

//routes
const orderRoute = require('./routes/orders.js')

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB');
    } catch (error) {
        throw error
    }
};

// middlewares
app.use(express.json());
app.use(cors());

app.use('/api/orders', orderRoute);

app.get("/", (req, res) => {
    res.send('API');
});

app.listen(port, () => {
    connect();
    console.log(`Orders api is listening on ${port}..`);
});
