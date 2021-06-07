const deleteRecipe = require("express").Router();
const recipe = require("../../models/Recipe");

deleteRecipe.post("/delete-recipe", async (req,res) => {
    const {_id} = req.body;

    try {
     const deleted = await recipe.findOneAndDelete({_id:_id});
      if(deleted){
        return res.status(200).json({
          msg:"Recept byl smazán"
      })
      }else{
        return res.status(500).json({
          msg:"Recept není v databázi"
        })
      }
        
    } catch (error) {
      res.json({msg: 'Bohužel došlo k neznáme chybě - server se nepřipojil asi k DB'});
    }
});

module.exports = deleteRecipe;