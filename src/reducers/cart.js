var initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART':
      state = action.cart;
      return [...state];
    default:
      return [...state];
  }
};
