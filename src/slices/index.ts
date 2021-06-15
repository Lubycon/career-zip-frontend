import { configureStore } from '@reduxjs/toolkit';
import account from './account';
import common from './common';
import archivingList from './archiving-list';

const store = configureStore({
  reducer: {
    account,
    common,
    archivingList,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
