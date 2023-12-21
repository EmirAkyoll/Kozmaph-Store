require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51O43ZgBj3594sT8OttBLGrtoaOwWDcMdV4bHr4cWorn9MPqrr5UnkG5PAAyee1rKxhAQeEeK7rVd60kjx0qRLCPr00HiHn7uDS");

app.use(express.json());
app.use(cors());

app.post("/api/payment",async(req,res)=>{
    console.log("cart server: ",req.body);
    const { products } = req.body;

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.productName,
                images:[product.productImage]
            },
            unit_amount:product.productPrice * 100,
        },
        quantity:product.productQuantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:4200/cart",
        cancel_url:"http://localhost:4200/cart",
    });

    res.json({id:session.id})
})


app.listen(7000,()=>{
    console.log("payment server start on 7000")
})