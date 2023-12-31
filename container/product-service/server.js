const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

//routes
const categoryRoute = require('./routes/categories.js');
const productRoute = require('./routes/products.js');

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
// app.use(logger('dev'));

app.use('/api/categories', categoryRoute);
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
    res.send('API');
});

app.listen(port, () => {
    connect();
    console.log(`Api is listening on ${port}..`);
});
