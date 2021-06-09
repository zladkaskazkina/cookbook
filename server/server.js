const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");


const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect");
dotenv.config();


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

app.use(cors(), getRecipes);
app.use(cors(), getIngredients);

//  ROUTY POST

app.use(cors(), saveIngredient);
app.use(cors(), saveRecipe);
app.use(cors(), updateIngredient);// update ingredient
app.use(cors(), updateRecipe);// update recipe

// delete recipe
app.use(cors(), deleteIngredient)// delete ingredient


app.listen(PORT, (err) => {
  if(err) throw new Error(
    "Server nebylo mozne nastartovat"
  );
  console.log(`Server bezi na adrese http://localhost:${PORT}`)
});