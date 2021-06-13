const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema =  new Schema({
  // author:{
  //   type: String, 
  //   default: "admin"
  // },
  category:{
    type:String,
  },
  name:{
    type:String,
    //required: true
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
  }
});

module.exports = mongoose.model('recipes', recipeSchema);