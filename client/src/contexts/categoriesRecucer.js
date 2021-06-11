export const initialState = {
  categories: [],
};

export default function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
}
