const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default: return state;
  }
};

export default reducer;
