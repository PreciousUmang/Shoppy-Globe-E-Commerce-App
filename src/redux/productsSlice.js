import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        list:[],
        productDetail: null,
        error: null
    },
    reducers:{
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