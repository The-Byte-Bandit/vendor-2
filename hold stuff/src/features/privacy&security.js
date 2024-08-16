import { createSlice } from '@reduxjs/toolkit';
import { browserSessions } from '../constants/constant';

const initialState = {
  sessions: browserSessions, // Assuming browserSessions is an array or object
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    // Add reducer functions here to handle session-related actions
    addSession: (state, action) => {
      state.sessions.push(action.payload);
    },
    removeSession: (state, action) => {
      // Logic to remove a session
    },
    // ...other reducer functions
  },
});

export const { addSession, removeSession } = sessionsSlice.actions;
export default sessionsSlice.reducer;
