import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      state.products.push(productToAdd);
      state.quantity += productToAdd.quantity;
      state.total += productToAdd.price * productToAdd.quantity;
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const productToIncrease = state.products.find(
        (product) => product._id === id
      );
      if (productToIncrease) {
        productToIncrease.quantity += 1;
        state.quantity += 1;
        state.total += productToIncrease.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const productToDecrease = state.products.find(
        (product) => product._id === id
      );
      if (productToDecrease && productToDecrease.quantity > 0) {
        productToDecrease.quantity -= 1;
        state.quantity -= 1;
        state.total -= productToDecrease.price;
        if (productToDecrease.quantity === 0) {
          state.products = state.products.filter(
            (product) => product._id !== id
          );
        }
      }
    },
    resetCart: (state) => {
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
