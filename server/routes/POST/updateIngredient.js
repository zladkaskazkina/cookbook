const updateIngredient = require("express").Router();
const ingredientModel = require("../../models/Ingredient");

updateIngredient.post("/update-ingredient", async (req,res) => {
    const {name, _id} = req.body;

    try {
        const update = {
            "$set": {
            name
            }
          };
      const data = await ingredientModel.findOneAndUpdate({_id:_id}, update);
     
    if (data){
      return res.status(200).json({
        msg:"Ingredience byla úspěšně aktualizována"
      });
    }else{
      return res.status(406).json({
        msg:"Bohužel takovou ingredinci nemáme v databázi"
      });
    }
      
    } catch (error) {
      res.json({msg: 'Bohužel došlo k neznáme chybě - server se nepřipojil asi k DB'});
    }
});

module.exports = updateIngredient;