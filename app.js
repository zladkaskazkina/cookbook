const express = require("express");
const mongoose = require("mongoose");
const keys = require("./server/config/keys");

const recipes = require("./server/routes/recipes-routes");

require("./server/models/Recipe");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/recipes', recipes);

app.get('/', (req,res) =>{
  res.set('Content-Type', 'text/html');
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);