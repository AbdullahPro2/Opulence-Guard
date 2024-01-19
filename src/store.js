import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/Transaction/TransactionSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});

export default store;
