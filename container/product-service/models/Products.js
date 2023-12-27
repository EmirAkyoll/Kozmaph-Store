const mongoose = require('mongoose');
  
const ProductSchema = mongoose.Schema(
{ 
  _id: { type: String, require: true },
  name: { type: String, require: true },
  image_urls: { type: [String], require: true },
  price: { type: Number, require: true },
  seller: { type: String, require: true },
  is_marked: { type: Boolean, require: true },
  categories: { type: [String], require: true },
  advantages: { type: [String], require: true },
  summary: { type: [String], require: true },
  description: { type: [String], require: true },
  quantity: { type: Number, require: true },
  features: [{
    feature_name: { type: String, required: true },
    feature_value: { type: String, required: true },
  }],
  questions: [{
    question_text: { type: String },
    answer: { type: String },
  }],
  comments: [{
    comment_text: { type: String },
    rating: { type: Number, min: 1, max: 5 }
  }],
},

{ timestamps: true }
);

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;