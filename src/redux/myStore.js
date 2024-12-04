import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice"

export const myStore = configureStore({
    reducer:{
        cart: cartReducer,
        products : productsReducer,
        search: searchReducer,
    }
})