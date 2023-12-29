const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  { 
    _id: { type: String, require: true },
    name: { type: String, require: true },
    image_url: { type: String, require: true },
    price: { type: Number, require: true },
    seller: { type: String, require: true },
    quantity: { type: Number, require: true },
  }
);

const OrderSchema = mongoose.Schema(
{ 
  _id: { type: String, require: true },
  products: [ProductSchema],
  total_price: { type: Number, require: true },
  user_name: { type: String, require: true },
  user_address: { type: String, require: true },
  user_email: { type: String, require: true },
  payment_type: { type: String, require: true },
  date: { type: String, require: true }
},

{ timestamps: true }
);

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;