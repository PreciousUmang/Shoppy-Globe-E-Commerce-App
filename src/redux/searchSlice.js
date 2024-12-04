import { createActionCreatorInvariantMiddleware, createReducer } from "@reduxjs/toolkit";

const searchSlice = createReducer({
    name: 'search', 
    initialState: {
     query: ''
    },
    reducers : {
        setSearchQuery: (state, action)=>{
            state.query = action.payload;
        }
    }
})

export const {setSearchQuery} = searchSlice.actions;
export default searchSlice.reducer;