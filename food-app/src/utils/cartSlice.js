import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.items.findIndex(
        (el) => el.card.info.id === action.payload.card.info.id
      );
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
