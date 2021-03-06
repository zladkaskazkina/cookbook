import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddRecipe from "./views/AddRecipe";
import DetailRecipe from "./views/detailRecipe";
import Layout from "./components/layout";
import Main from "./views/mainPage";
import React from "react";
import { StoreProvider } from "./contexts/store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/add-recipe" component={AddRecipe} />
            <Route exact path="/recipes/:recipeId" component={DetailRecipe} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
