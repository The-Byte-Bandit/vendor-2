import { createSlice } from "@reduxjs/toolkit";
import {transactionhistory, recentTransactions, spendingSummary, topProducts} from '../constants/constant'

export const walletems = createSlice({
    name: "dashboardItems",
    initialState: {
        totalSales: 6240.28,
        totalSalesDifference: -2,
        totalOrders: 240,
        totalOrdersDifference: -2,
        storeVisists: 28,
        storeVisistsDifference: -2,
        transactionhistory: transactionhistory,
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




export default walletems.reducer;