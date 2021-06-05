const saveIngredient = require('express');
const modelIngredient = require('../../models/Ingredient');

saveIngredient.post('/save-ingredient', (req, res)=> {
  const { name } = req.body
  const surovina = new modelIngredient({
    name: name
  })
  surovina.save((err , data) => {
    if(err) {
      return res.json({
        msg: "Bohuzel nedoslo k ulozeni suroviny"
      })
    } else {
      return res.json({
        msg: `Doslo k uspesnemu ulozeni objektu ${JSON.stringify(data)}`
      })
    }
  })
});

