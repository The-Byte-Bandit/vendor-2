import { createSlice } from "@reduxjs/toolkit";
import { recentOrders } from '../constants/constant';

export const orderItems = createSlice({
  name: "customerOrders",
  initialState: {
    recentOrders: recentOrders,
    customerName: '',
    customerEmail: '',
    customerPhoneNumber: '',
    customerGender: '',
    streetAddress: '',
    city: '',
    products: [{ productName: '', productSKU: '', quantity: '', price: '' }],
    paymentMethod: '',
    discount: 0,
    subtotal: 0,
    total: 0,
    vat: 0,
  },
  reducers: {
    updateOrderState: (state, action) => {
        const { ...payload } = action.payload; 

    for (const [key, value] of Object.entries(payload)) {
        if (key in state) {
            state[key] = value;
            console.log("yes");
          } else {
            console.warn(`Invalid update key: ${key}`);
          }
        
    }
    
    },
    
  },
});

export const { updateOrderState } = orderItems.actions;
export default orderItems.reducer;
