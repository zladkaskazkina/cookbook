const express = require('express');
const { getRecipes, getRecipe, createRecipe} = require('../controllers/recipes-controller');

const router = express.Router();

router.route('/').get(getRecipes).post(createRecipe);
router.route('/:id').get(getRecipe);

module.exports = router;