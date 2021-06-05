
const getRecipes = require('express').Router();
const recipeModel = require('../../models/Recipe');
getRecipes.get('allrecipes', (req,res) => {
  recipeModel.find({}, (err, data) => {
    if(err) {
      return res.json({
          msg: "Bohuzel se nenacetli recepty",
          documents: []
        })
    } else {
      return res.json({
        msg: "Uspesne se nacetli recepty",
        documents: data
      })
    }
  })
})
module.exports = getRecipes