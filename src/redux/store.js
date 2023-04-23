import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import usernameReducer from "./usernameReducer";
import { userImageReducers } from './userImageSlice';
export const store = configureStore({
   reducer: {
      username: usernameReducer,
      cart: cartReducer,
      userImage : userImageReducers,
   },
});