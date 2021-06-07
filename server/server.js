const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect");

const saveIngredient = require('./routes/POST/saveIngredients')
const saveRecipe = require('./routes/POST/saveRecipe')
const getRecipes = require('./routes/GET/getRecipes')
const getIngredients = require('./routes/GET/getIngredience')
// delete recipe
const updateRecipe = require('./routes/POST/updateRecipe')// update recipe
const updateIngredient = require('./routes/POST/updateIngredient')// update ingerdient
const deleteIngredient = require('./routes/POST/deleteIngredient')// delete ingredient

// Middleware
// Povolit prijimat JSON z Frontendu
app.use(express.json({extended:false}));
app.use(express.text({extended:false}));

// Pripojeni k DB
const database = new dbConnect();
database.connect();



// ROUTY GET

app.use('/', getRecipes);
app.use('/', getIngredients);

//  ROUTY POST

app.use("/", saveIngredient);
app.use("/", saveRecipe);
app.use("/", updateIngredient);// update ingredient
app.use("/", updateRecipe);// update recipe

// delete recipe
app.use("/", deleteIngredient)// delete ingredient


app.listen(PORT, (err) => {
  if(err) throw new Error(
    "Server nebylo mozne nastartovat"
  );
  console.log(`Server bezi na adrese http://localhost:${PORT}`)
});