const saveRecipe = require('express').Router()
const recipeModel = require('../../models/Recipe')

saveRecipe.post('/save-recipe', (req, res) => {
  const { author, category, name, summary, ingredients, preparationTime, method, photo, tags} = req.body;
  const newRecipe = new recipeModel({
    author, category, name, summary, ingredients, preparationTime, method, photo, tags
  })
  newRecipe.save((err, data) => {
    if(err) {
      return res.json({
        msg: "Bohuzel nedoslo k ulozeni receptu"
      })
    } else {
      return res.json({
        msg: `Doslo k uspesnemu ulozeni receptu ${JSON.stringify(data)}`
      })
    }
  })
})

module.exports = saveRecipe;