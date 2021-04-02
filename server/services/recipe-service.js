let recipes = {
  1: {
    name: "John"
  }
};

function getRecipe(id, res) {
  let recipe = recipes[id];
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(400).json({error: "Recipe doesn't exist"
  });
  }
}

module.exports = {
  getRecipe
};