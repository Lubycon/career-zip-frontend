import { configureStore } from '@reduxjs/toolkit';
import account from './account';
import archivingList from './archiving-list';

const store = configureStore({
  reducer: {
    account,
    archivingList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
