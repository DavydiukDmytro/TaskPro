import {
  handleFulfilledUser,
  handleFulfilledUserLogOut,
  handlePendingUser,
  handleRejectedUser,
} from './hundleReducerAuth';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const { login, register, logOut, updateUser } = require('./operationAuth');

const initialState = {
  user: { name: null, email: null, photo: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
const customArr = [register, login, logOut, updateUser];
const customArrStatusActions = status => customArr.map(el => el[status]);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: buider => {
    buider
      .addCase(register.fulfilled, handleFulfilledUser)
      .addCase(login.fulfilled, handleFulfilledUser)
      .addCase(updateUser.fulfilled, handleFulfilledUser)
      .addCase(logOut.fulfilled, handleFulfilledUserLogOut)
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.pending)),
        handlePendingUser
      )
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.rejected)),
        handleRejectedUser
      );
  },
});

export const userReducer = userSlice.reducer;
