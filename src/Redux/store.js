import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const cart = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default cart;
