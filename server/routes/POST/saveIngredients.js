const saveIngredient = require('express').Router();
const modelIngredient = require('../../models/Ingredient');

saveIngredient.post('/save-ingredient', (req, res)=> {
  const { name } = req.body
  const ingredient = new modelIngredient({
    name: name
  })
  ingredient.save((err , data) => {
    if(err) {
      return res.json({
        msg: "Bohuzel nedoslo k ulozeni suroviny"
      })
    } else {
      return res.json({
        msg: `Doslo k uspesnemu ulozeni suriviny ${JSON.stringify(data)}`
      })
    }
  })
});
module.exports = saveIngredient;

