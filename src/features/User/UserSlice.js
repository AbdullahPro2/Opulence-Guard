import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  password: '',
  accountNumber: '',
};

function generateBankAccountNumber(existingAccountNumbers) {
  // Set the maximum and minimum values for the 6-digit account number
  const minAccountNumber = 100000;
  const maxAccountNumber = 999999;

  let newAccountNumber;

  // Generate a unique 6-digit random number
  do {
    newAccountNumber = Math.floor(
      Math.random() * (maxAccountNumber - minAccountNumber + 1) +
        minAccountNumber,
    );
  } while (existingAccountNumbers.includes(newAccountNumber));

  // Add the new account number to the existing list
  existingAccountNumbers.push(newAccountNumber);

  return newAccountNumber;
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: {
      prepare(fullName, password) {
        return {
          payload: {
            fullName,
            password,
            accountNumber: Math.floor(
              Math.random() * (99999 - 10000 + 1) + 10000,
            ),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.password = action.payload.password;
        state.accountNumber = action.payload.accountNumber;
      },
    },
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
