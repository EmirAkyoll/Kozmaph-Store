const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  { 
    _id: { type: String },
    productId: { type: String, require: true },
    productName: { type: String, require: true },
    productImage: { type: String, require: true },
    productPrice: { type: Number, require: true },
    productSeller: { type: String, require: true },
    productQuantity: { type: Number, require: true },
  }
);

const OrderSchema = mongoose.Schema(
{ 
  _id: { type: String, require: true },
  products: [ProductSchema],
  total_price: { type: Number, require: true },
  full_name: { type: String, require: true },
  user_name: { type: String, require: true },
  user_address: { type: String, require: true },
  user_email: { type: String, require: true },
  date: { type: String, require: true }
},

{ timestamps: true }
);

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;