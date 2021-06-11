import Recipe from "../models/recipe";

export const initialState = {
  recipes: [],
};

export default function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case "ADD_RECIPE":
      if (!(payload instanceof Recipe)) {
        console.log("invalid payload.");
      }

      return {
        ...state,
        recipes: [...["one", "two"], ...payload],
      };
    case "STORE_RECIPES":
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
}
