// @desc Get all recipes
// @route GET /api/recipes
// @access Public
exports.getRecipes = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all recipes'
  });
};

// @desc Get recipe
// @route GET /api/recipes/:id
// @access Public
exports.getRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show recipe ${req.params.id}`
  });
};

exports.createRecipe = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Created recipe'
  });
};