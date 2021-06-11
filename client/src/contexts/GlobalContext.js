import React, { createContext, useReducer } from "react";

import GlobalReducer from "./GlobalReducer";

/**
 * 1. Vyplnit defaultni state
 */
const mainState = {
  ingredient: "",
};

export const GlobalContext = createContext(mainState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, mainState);
  /**
   * 3. Funkce která manipuluje s přislušným statem z bodu 1
   */
  const changeIngredient = (ingredientFromFunction) => {
    dispatch({
      type: "CHANGE_INGREDIENT",
      payload: ingredientFromFunction,
    });
  };

  return (
    <GlobalContext.Provider
      /**
       * 2. Propišete tu hodnotu z toho statu
       */
      value={{
        ingredient: state.ingredient,
        changeIngredient,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
