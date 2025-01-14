import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Corrected to use action.payload
    },
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
