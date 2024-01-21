import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  fullName: '',
  accountNumber: '',
  uid: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: {
      prepare(fullName, userUid, accountNumber) {
        return {
          payload: {
            fullName,
            accountNumber,
            userUid,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.uid = action.payload.userUid;
        state.accountNumber = action.payload.accountNumber;
      },
    },
    userLogout(state, action) {
      state.fullName = '';
      state.accountNumber = '';
      state.uid = '';
    },
  },
});

export const { createUser, userLogout } = userSlice.actions;
export default userSlice.reducer;
