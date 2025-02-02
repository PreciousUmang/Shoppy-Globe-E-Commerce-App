import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem){existingItem.quantity +=1;}
            else{
                state.items.push({...action.payload, quantity:1})
            }           
        },
      
        increaseQuantity:(state, action) =>{
            const item = state.items.find(item => item.id===action.payload)

            if(item){
                item.quantity +=1;
            }

        }, 
        adjustQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
              item.quantity += amount; 

              if (item.quantity <= 0) {
                state.items = state.items.filter(item => item.id !== id);
            }
        }
      }
    }
  });

export const {addItem, removeItem, adjustQuantity} = cartSlice.actions;
export default cartSlice.reducer;
