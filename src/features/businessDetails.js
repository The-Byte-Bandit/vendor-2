import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storeLogo: '',
    usinessName: '',
    email: '',
    phoneNumber: '',
    companyRegistrationNumber: '',
    businessAddress: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
    },
};

const businessDetails = createSlice({
  name: 'businessDetails',
  initialState,
  reducers: {
    updateBusinessDetails(state, action) {
        const updates = action.payload; // assuming payload is an object with key-value pairs
        Object.keys(updates).forEach(key => {
          if (key in state) {
            state[key] = updates[key];
          } else {
            console.warn(`Invalid update key: ${key}`);
          }
        });
    },
    resetBusinessDetails() {
      return initialState;
    },
  },
});

export const { updateUserProfile, resetUserProfile } = businessDetails.actions;
export default businessDetails.reducer;
