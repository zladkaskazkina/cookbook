const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect");

const saveIngredient = require('./routes/POST/saveIngredients')
// save recipe
// get recipe
const getIngredients = require('./routes/GET/getIngredience')
// delete recipe
// update recipe
// update ingerdient
// delete ingredient

// Middleware
// Povolit prijimat JSON z Frontendu
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Pripojeni k DB
const database = new dbConnect();
database.connect();



// ROUTY GET

// get Recipe
app.use('/', getIngredients)

//  ROUTY POST

app.use("/", saveIngredient)
// save recipe
// update recipe
// update ingredient

// delete recipe
// delete ingredient


app.listen(PORT, (err) => {
  if(err) throw new Error(
    "Server nebylo mozne nastartovat"
  );
  console.log(`Server bezi na adrese http://localhost:${PORT}`)
});