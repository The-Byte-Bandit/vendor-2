import { createSlice } from "@reduxjs/toolkit";
import {products} from '../constants/constant'

export const productItems = createSlice({
    name: "productItems",
    initialState: {
        productList: products,
        
    },
    reducers: {
        // activate: (state, action) => {
        //     console.log(action.payload);
        //     const keys = Object.keys(state);
        //     keys.forEach(key => {
        //         state[key] = key === action.payload;
        //     });
        // }
    }
});




export default productItems.reducer;