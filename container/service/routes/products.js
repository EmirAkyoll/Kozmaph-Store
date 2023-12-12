const Product = require('../models/Products');
const express = require('express');
const router = express.Router();

router.get('/get-all', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products)
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/get-product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product)
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/add-product', async (req, res) => {
    try {
        console.log("REQQQQ: ", req.body);
        const newProduct = new Product(req.body);
        console.log("NEW PRODUCT DATAAAAAA: ",newProduct);
        await newProduct.save();
        res.status(200).json('Item added successfully!')
    } catch (error) {
        res.status(400).json(error);
    }
})
    
router.put('/update-product/:id', async (req, res) => {
    console.log("update req body: ", req.body);
    try {
        await Product.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).send('Item updated successfully!')
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete('/delete-product/:id', async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.params.id })
        res.status(200).send('Item deleted successfully!')
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;