import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collectios: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  // If no any modification default state return
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
