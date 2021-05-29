import { configureStore } from '@reduxjs/toolkit';
import account from './account';

const store = configureStore({
  reducer: {
    account,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
