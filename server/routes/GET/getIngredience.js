const getIngredients = require('express').Router();
const ingredientModel = require('../../models/Ingredient');
getIngredients.get('get-ingredients', (req,res) => {
  ingredientModel.find({}, (err, data) => {
    if(err) {
      return res.json({
          msg: "Bohuzel se nenacetli suroviny",
          documents: []
        })
    } else {
      return res.json({
        msg: "Uspesne se nacetli suroviny",
        documents: data
      })
    }
  })
})
module.exports = getIngredients