import { createSlice } from "@reduxjs/toolkit";

export const sideNavItems = createSlice({
    name: "sidenavitems",
    initialState: {
        dashboard: true,
        products: false,
        orders: false,
        sales: false,
        wallet: false,
        settings: false,
        support: false,
    },
    reducers: {
        activate: (state, action) => {
            const activatedItem = action.payload;
            // Set the activated item to true and deactivate others
            if(activatedItem === '/'){
                state.dashboard = true
                state.products = false
                state.orders = false
                state.sales = false
                state.wallet = false
                state.settings = false
                state.support = false
            }else {
            Object.keys(state).forEach(key => {
                // state[key] = key === activatedItem;
                if(activatedItem.includes(key)){
                    state[key] = true
                }else{
                    state[key] = false
                }
            });
        }
        }
    }
});

export const { activate } = sideNavItems.actions;

export default sideNavItems.reducer;
