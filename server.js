const express = require("./server/node_modules/express");
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./server/database/connect");

const database = new dbConnect();
database.connect();

const recipes = require("./server/routes/recipes-routes");

require("./server/models/Recipe");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/recipes', recipes);

app.get('/', (req,res) =>{
  res.set('Content-Type', 'text/html');
  res.send({hi: 'there'});
});


app.listen(PORT);