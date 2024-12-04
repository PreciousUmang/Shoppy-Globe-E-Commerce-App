import { createSlice } from "@reduxjs/toolkit";
import { UNSAFE_ErrorResponseImpl } from "react-router";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem:(state, action) => {
            state.items.filter(item => item.id !== action.payload);
        }
    }
    }
)

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
