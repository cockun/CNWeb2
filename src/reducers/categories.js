var initialState = [];

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      state = action.categories;
      return [...state];
    default:
      return [...state];
  }
};
