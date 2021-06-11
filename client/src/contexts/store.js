import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
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

  const addRecipe = useCallback(() => {
    recipesDispatch({ type: "ADD_RECIPE" });
  });

  const storeRecipes = useCallback((recipesFromDatabase) => {
    recipesDispatch({ type: "STORE_RECIPES", payload: recipesFromDatabase });
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
