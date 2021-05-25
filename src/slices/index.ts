import { configureStore } from '@reduxjs/toolkit';
import account from './account';

const store = configureStore({
  reducer: {
    account,
  },
});

export default store;
