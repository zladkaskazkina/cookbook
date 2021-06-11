import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import recipesReducer, {
  initialState as recipesInitialState,
} from "./recipesReducer";

const storeState = {
  recipes: [],
};

const StoreContext = createContext(storeState);

export default StoreContext;

export const StoreProvider = ({ children }) => {
  const [recipesState, recipesDispatch] = useReducer(
    recipesReducer,
    recipesInitialState
  );

  console.log("recipesState", recipesState);

  const storeRecipes = useCallback((recipesFromDatabase) => {
    recipesDispatch({ type: "STORE_RECIPES", payload: recipesFromDatabase });
  });

  const addRecipe = useCallback((newRecipe) => {
    recipesDispatch({ type: "ADD_RECIPE", payload: newRecipe });
  });

  return (
    <StoreContext.Provider
      value={{ recipes: recipesState.recipes, addRecipe, storeRecipes }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
