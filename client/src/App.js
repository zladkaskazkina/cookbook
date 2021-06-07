import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './views/mainPage';
import AddRecipe from './views/addRecipe'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Main}/>
        <Route exact path="/add-recipe"  component={AddRecipe}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
