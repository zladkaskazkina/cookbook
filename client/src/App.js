import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddRecipe from "./views/addRecipe";
import DetailRecipe from "./views/detailRecipe";
import Main from "./views/mainPage";
import React from "react";
import RecipeList from "./components/recipeList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-recipe" component={AddRecipe} />
        <Route exact path="/recipes/:recipeId" component={DetailRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
