const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema =  new Schema({
  author:{
    type:String,
  },
  category:{
    type:String,
  },
  name:{
    type:String,
  },
  summary:{
    type:String
  },
  ingredients:{
    type:Array,
  },
  preparationTime:{
    type:Number,
  },
  method:{
    type:String
  },
  photo: {
    type:String
  },
  tags: {
    type:Array,
  }
});

module.exports = mongoose.model('recipes', recipeSchema);