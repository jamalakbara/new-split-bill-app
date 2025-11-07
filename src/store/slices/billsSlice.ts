import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BillsState, Bill } from '@/types';

const initialState: BillsState = {
  bills: [],
  currentBill: null,
  loading: false,
  error: null,
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setBills: (state, action: PayloadAction<Bill[]>) => {
      state.bills = action.payload;
      state.error = null;
    },
    addBill: (state, action: PayloadAction<Bill>) => {
      state.bills.unshift(action.payload);
    },
    updateBill: (state, action: PayloadAction<Bill>) => {
      const index = state.bills.findIndex(bill => bill.id === action.payload.id);
      if (index !== -1) {
        state.bills[index] = action.payload;
      }
      if (state.currentBill?.id === action.payload.id) {
        state.currentBill = action.payload;
      }
    },
    removeBill: (state, action: PayloadAction<string>) => {
      state.bills = state.bills.filter(bill => bill.id !== action.payload);
      if (state.currentBill?.id === action.payload) {
        state.currentBill = null;
      }
    },
    setCurrentBill: (state, action: PayloadAction<Bill | null>) => {
      state.currentBill = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setBills,
  addBill,
  updateBill,
  removeBill,
  setCurrentBill,
} = billsSlice.actions;

export default billsSlice.reducer;