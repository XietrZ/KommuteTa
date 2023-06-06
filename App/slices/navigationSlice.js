import { createSlice } from "@reduxjs/toolkit";

// --> Initial state
const initialState = {
  origin: null,
  destination: null,
};

// --> use createSlice ()
const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.destination = action.payload;
    },
  },
});

// --> Export all actions
export const { setOrigin, setDestination } = navigationSlice.actions;

// --> Selector
export const selectOrigin = (state) => state.navigation.origin;
export const selectDestination = (state) => state.navigation.destination;

// --> Export reducers
export default navigationSlice.reducer;
