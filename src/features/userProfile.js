import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: 'Rhema Briggs',
  email: '',
  phoneNumber: '',
  gender: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      const { key, value } = action.payload;
      if (key in state) {
        state[key] = value;
      } else if (key in state.address) {
        state.address[key] = value;
      } else {
        console.warn(`Invalid update key: ${key}`);
      }
    },
    resetUserProfile() {
      return initialState;
    },
  },
});

export const { updateUserProfile, resetUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
