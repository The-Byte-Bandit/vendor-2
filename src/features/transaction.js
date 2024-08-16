import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accountNumber: 0,
  ammount: 0,
  bankName: '',
  recipient: '',
  description: '',
  from: 'Swiphr ecom account',
  balance: 120500.00,
};

const transactionDetails = createSlice({
  name: 'transactionDetails',
  initialState,
  reducers: {
    updateTransactionDetails(state, action) {
        const updates = action.payload; // assuming payload is an object with key-value pairs
        Object.keys(updates).forEach(key => {
          if (key in state) {
            state[key] = updates[key];
          } else {
            console.warn(`Invalid update key: ${key}`);
          }
        });
    },
    resetTransactionDetails() {
      return initialState;
    },
  },
});

export const { resetTransactionDetails, updateTransactionDetails } = transactionDetails.actions;
export default transactionDetails.reducer;
