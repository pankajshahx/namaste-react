import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      const itemId = action.payload.info.id;
      if (state.items[itemId]) {
        state.items[itemId].quantity += 1;
      } else {
        state.items[itemId] = { ...action.payload, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.info.id;
      if (state.items[itemId]) {
        state.items[itemId].quantity -= 1;
        if (state.items[itemId].quantity === 0) {
          delete state.items[itemId];
        }
      }
    },
    clearItem: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
