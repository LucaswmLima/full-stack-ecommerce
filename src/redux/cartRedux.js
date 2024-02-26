import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        const removedProduct = state.products[index];
        state.products.splice(index, 1);
        state.total -= removedProduct.price;
      }
    },
    resetCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
      
    },
  },
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
