const express = require("express");
const mongoose = require("mongoose");
const recipes = require("./routes/recipes-routes");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/recipes', recipes);

app.get('/', (req,res) =>{
  res.set('Content-Type', 'text/html');
  res.send({hi: 'there'});
});

app.listen(PORT);