import { createSlice } from "@reduxjs/toolkit";
import {customer, recentTransactions, spendingSummary, topProducts} from '../constants/constant'

export const dashboardItems = createSlice({
    name: "dashboardItems",
    initialState: {
        totalSales: 6240.28,
        totalSalesDifference: -2,
        totalOrders: 240,
        totalOrdersDifference: -2,
        storeVisists: 28,
        storeVisistsDifference: -2,
        recentOrders: customer,
        topProducts: topProducts,
        SpendingSummary: spendingSummary,
        recentTransactions: recentTransactions,
        
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




export default dashboardItems.reducer;