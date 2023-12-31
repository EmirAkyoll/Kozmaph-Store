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
  buyer_id: { type: String, require: true },
  buyer_full_name: { type: String, require: true },
  buyer_name: { type: String, require: true },
  buyer_address: { type: String, require: true },
  buyer_email: { type: String, require: true },
  total_price: { type: Number, require: true },
  date: { type: String, require: true }
},

{ timestamps: true }
);

const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;