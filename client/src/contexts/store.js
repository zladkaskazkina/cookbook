import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import categoriesRecucer, {
  initialState as categoriesInitialState,
} from "./categoriesRecucer";
import recipesReducer, {
  initialState as recipesInitialState,
} from "./recipesReducer";

const StoreContext = createContext({
  recipes: recipesInitialState,
  categories: categoriesInitialState,
});

export default StoreContext;

export const StoreProvider = ({ children }) => {
  const [recipesState, recipesDispatch] = useReducer(
    recipesReducer,
    recipesInitialState
  );

  const [categoriesState, categoriesDispatch] = useReducer(
    categoriesRecucer,
    categoriesInitialState
  );

  const storeRecipes = useCallback((recipesFromDatabase) => {
    recipesDispatch({ type: "STORE_RECIPES", payload: recipesFromDatabase });
  });

  const addRecipe = useCallback((newRecipe) => {
    recipesDispatch({ type: "ADD_RECIPE", payload: newRecipe });
  });

  const storeCategories = useCallback((categories) => {
    categoriesDispatch({ type: "ADD_CATEGORIES", payload: categories });
  });

  return (
    <StoreContext.Provider
      value={{
        recipes: recipesState.recipes,
        categories: categoriesState.categories,
        addRecipe,
        storeRecipes,
        storeCategories,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
