const deleteIngredient = require("express").Router();
const ingredientModel = require("../../models/Ingredient");

deleteIngredient.post("/delete-ingredient", async (req,res) => {
    const {_id} = req.body;
    try {
      await ingredientModel.findOneAndDelete({_id:_id});
        return res.json({
            msg:"Materiál byl smazán"
        })
    } catch (error) {
      res.json({msg: 'Bohužel došlo k chybě - pravdepodobne server se nepřipojil k DB'});
    }
});

module.exports = deleteIngredient;