import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddRecipe from "./views/addRecipe";
import Main from "./views/mainPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-recipe" component={AddRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
