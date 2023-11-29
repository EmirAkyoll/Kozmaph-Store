const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
{ categories: [{
    category_name: { type: String, require: true },
    subcategories: [{ type: String, require: true }],
  }]
},

{ timestamps: true }
);

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;