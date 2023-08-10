import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { boardsReduser } from './boards/boardsSlice';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    user: userReducer,
    boards: boardsReduser,
  },
});
