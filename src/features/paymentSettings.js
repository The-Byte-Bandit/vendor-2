import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentMethod: {
        bankName:'',
        accountNumber:'',
        accountName:'',
    },
    billingInformation: {
        bankName:'',
        accountNumber:'',
        accountName:'',
    },
};

const paymentSettings = createSlice({
  name: 'businessDetails',
  initialState,
  reducers: {
    updatePaymentSettings(state, action) {
        const updates = action.payload; // assuming payload is an object with key-value pairs
        Object.keys(updates).forEach(key => {
          if (key in state) {
            state[key] = updates[key];
          } else {
            console.warn(`Invalid update key: ${key}`);
          }
        });
    },
    resetPaymentSettings() {
      return initialState;
    },
  },
});

export const { updateUserProfile, resetUserProfile } = paymentSettings.actions;
export default paymentSettings.reducer;
