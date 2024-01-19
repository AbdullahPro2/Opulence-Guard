import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/Transaction/TransactionSlice';
import userReducer from './features/User/UserSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer,
  },
});

export default store;
