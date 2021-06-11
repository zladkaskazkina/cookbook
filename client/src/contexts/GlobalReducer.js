const reducer = (state, action) => {
  switch (action.type) {
    /**
     * 4. zde se zpracuje finální operace
     */
    case "CHANGE_INGREDIENT":
      return {
        ...state,
        ingredient: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
