import { Item } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  count: number;
}

interface CartState {
  data: CartItem[];
}

const initialState: CartState = {
  data: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      const item = state.data.find((itm) => itm.id == action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.data.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
