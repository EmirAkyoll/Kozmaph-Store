const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
{ 
  name: { type: String, require: true },
  image_urls: { type: [String], require: true },
  price: { type: Number, require: true },
  seller: { type: String, require: true },
  advantages: { type: [String] },
  summary: { type: [String], require: true },
  description: { type: [String], require: true },
  features: [{
    feature_name: { type: String, required: true },
    feature_value: { type: String, required: true },
  }],
  questions: [{
    question_text: { type: String },
    answers: { type: String },
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