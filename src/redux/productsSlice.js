import { createReducer } from "@reduxjs/toolkit";
import reducer from "./cartSlice";

const productSlice = createReducer({
    name: 'products',
    initialState: {
        list:[],
        productDetail: null,
        error: null
    },
    reducer:{
        setProducts: (state, action) =>{
            state.list = action.payload;
        },
        setProductDetails: (state, action) => {
            state.productDetail = action.payload;
        },
        setError: (state, action) => {
            state.error = action.error;
        }
    }
})

export const {setProducts, setProductDetails, setError} = productSlice.actions;
export default productSlice.reducer;