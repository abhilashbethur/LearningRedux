import { createSlice } from "@reduxjs/toolkit";

const initialcounterState = {
  count: 0,
  show: true,
};

const countSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state, action) {
      state.count += action.payload;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const countActions = countSlice.actions;
export default countSlice.reducer;
