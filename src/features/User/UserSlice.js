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
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
