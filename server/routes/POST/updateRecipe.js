const updateRecipe = require("express").Router();
const recipeModel = require("../../models/Recipe");

updateRecipe.post("/update-recipe", async (req,res) => {
    const {author, category, name, summary, ingredients, preparationTime, method, photo, tags,_id} = req.body;

    try {
        const update = {
            "$set": {
              author, 
              category, 
              name, 
              summary, 
              ingredients, 
              preparationTime, 
              method, 
              photo, 
              tags
            }
          };
      const data = await recipeModel.findOneAndUpdate({_id:_id}, update);
     
   
if(data){
  return res.status(200).json({
    msg:"Recept byl úspěšně aktualizován"
  });
}else{
  return res.status(406).json({
    msg:"Recept nebyl bohužel aktualizován"
  })
}
      
    } catch (error) {
      res.json({msg: 'Bohužel došlo k neznáme chybě - server se nepřipojil asi k DB'});
    }
});

module.exports = updateRecipe;