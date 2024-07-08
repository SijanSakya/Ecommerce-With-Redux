import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counter/counterSlice";
import addToCartReducer from "@/redux/features/add-to-cart/addCartSlice";
//import { setupListeners } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: addToCartReducer
  },
});
// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
