const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema =  new Schema({
  name: String,
  // require: true,
  // min: 5,
  // max: 255
});

module.exports = mongoose.model('ingredients', ingredientSchema);