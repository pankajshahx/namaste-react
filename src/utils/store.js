import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import contactsSlice from "./contactsSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    contacts: contactsSlice,
  },
});

export default appStore;
