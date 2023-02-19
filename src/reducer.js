import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";

const reducer = (prevState, action) => {
  if (action.type === CLEAR_CART) {
    return { ...prevState, cart: [] };
  }

  if (action.type === REMOVE) {
    const newCart = prevState.cart.filter(
      (cartItem) => cartItem.id !== action.payload.id
    );
    return { ...prevState, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = prevState.cart.map((cartItem) => {
      if (cartItem.id !== action.payload.id) return cartItem;
      else {
        const updatedCartItem = { ...cartItem, amount: cartItem.amount + 1 };
        return updatedCartItem;
      }
    });

    return { ...prevState, cart: newCart };
  }

  if (action.type === DECREASE) {
    if (action.payload.amount === 1) {
      const newCart = prevState.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return { ...prevState, cart: newCart };
    }
    const newCart = prevState.cart.map((cartItem) => {
      if (cartItem.id !== action.payload.id) return cartItem;
      else {
        const updatedCartItem = { ...cartItem, amount: cartItem.amount - 1 };
        return updatedCartItem;
      }
    });

    return { ...prevState, cart: newCart };
  }
  return prevState;
};

export default reducer;
