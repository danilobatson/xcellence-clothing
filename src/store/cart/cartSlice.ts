import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { addItemToCart, removeItemFromCart } from './cartHooks';
// Define a type for the slice state
interface CounterState {
  hidden: boolean;
  cartItems: any[];
}

// Define the initial state using that type
const initialState: CounterState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action: PayloadAction<any>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action: PayloadAction<any>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem: any) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { toggleCartHidden, addItem, removeItem, clearItemFromCart } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default cartSlice.reducer;
