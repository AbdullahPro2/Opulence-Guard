import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  transferAmont: 0,
  isLoading: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposite(state, action) {
      state.balance = action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      if (state.balance < action.payload) return;
      state.balance = action.payload;
    },
    requestLoan: {
      prepare(amount, purpose, newBalance) {
        return {
          payload: { amount, purpose, newBalance },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = action.payload.newBalance;
      },
    },
    payLoan(state, action) {
      if (action.payload > state.loan) return;
      if (state.balance < action.payload) return;
      state.loan = action.payload;
      // state.loanPurpose = '';
    },
    transferToAnotherAccount(state, action) {
      if (state.balance < action.payload) return;
      state.transferAmont = action.payload;
      state.balance -= action.payload;
    },
  },
});

export const {
  withdraw,
  requestLoan,
  deposite,
  payLoan,
  transferToAnotherAccount,
} = accountSlice.actions;
export default accountSlice.reducer;
