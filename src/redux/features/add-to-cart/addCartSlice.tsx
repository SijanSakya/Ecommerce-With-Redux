import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addToCartState {
  value : any
}

const initialState: addToCartState = {
  value: [],
};
export const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.value.find((item: any) => item.id === newItem.id);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        // existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity property
        state.value.push({ ...newItem });
      }
    },
    deleteFromCart: (state, action) =>  {
      const itemIdToDelete = action.payload.id;
      const newState = state.value.filter((item: any) => item.id !== itemIdToDelete);

      return {
        ...state,
        value: newState,
      };
    },
  },
});
// Action creators are generated for each case reducer function
export const { addInCart, deleteFromCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
