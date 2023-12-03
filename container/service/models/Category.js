const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
{ 
  category_name: { type: String, require: true },
  sub_categories: [{ type: String, require: true }],
},

{ timestamps: true }
);

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;