import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import CountReducer from "./count";

const store = configureStore({
  reducer: {
    count: CountReducer,
    auth: AuthReducer,
  },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case "decrement":
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     case "toggle":
//       return {
//         ...state,
//         show: !state.show,
//       };
//     default:
//       return state;
//   }
// };
