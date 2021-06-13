const saveRecipe = require('express').Router()
const recipeModel = require('../../models/Recipe')

saveRecipe.post('/save-recipe', async (req, res) => {
  const {  category, name,  ingredients, preparationTime, method, photo} = req.body;
  const newRecipe = new recipeModel({
    category, name, ingredients, preparationTime, method, photo
  })
  try {
    await newRecipe.save((err, data) => {
      if(err) {
        return res.status(409).json({
          msg: "Bohuzel nedoslo k ulozeni receptu"
        })
      } else {
        return res.status(201).json({
          msg: `Doslo k uspesnemu ulozeni receptu ${JSON.stringify(data)}`
        })
      }
    })
  } catch (error) {
       res.status(500).json({msg: 'Bohužel došlo k chybě'});
      }

})

// saveRecipe.post('/save-recipe', async (req, res) => {
//   const { category, name, ingredients, preparationTime, method, photo, tags} = req.body;
//   const newRecipe = new recipeModel({
//     category, name, ingredients, preparationTime, method, photo, tags
//   })
//   try {
//     const data = await recipeModel.findOne({"name":name});

//     if(data) {
//       return res.status(409).json({
//         msg: "Recept s tímto jménem je už v naší databázi. Prosíme přejménovat recept"
//       });
//     }

//     const {_id} = await newRecipe.save();
//     if (_id) {
//       return res.status(201).json({
//         msg: `Doslo k uspesnemu ulozeni receptu ${JSON.stringify(data)}`
//       })
//     }
//   } catch (error) {
//     res.status(500).json({msg: 'Bohužel došlo k chybě'});
//   }
// })

module.exports = saveRecipe;