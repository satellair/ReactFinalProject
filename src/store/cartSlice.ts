import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@types'

interface ProductInCart extends Product {
  qty: number
}

interface Cart {
  cartItems: ProductInCart[],
  cartTotalQty: number,
  cartTotalAmt: number,
}

const initialState: Cart = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductInCart>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1
      } else {
        const tempProduct = { ...action.payload, qty: 1 }
        state.cartItems.push(tempProduct);
      }
    }
  }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
