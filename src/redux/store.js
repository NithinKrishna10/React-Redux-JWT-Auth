import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import { userImageReducers } from './userImageSlice';
import {userReducers} from "./usernameSlice";



export const store = configureStore({
   reducer: {
      username: userReducers,
      cart: cartReducer,
      userImage : userImageReducers,
   },
});


