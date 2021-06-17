import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'slices';

interface TInitialState {
  isSideMenuCollapsed: boolean;
}

const initialState: TInitialState = {
  isSideMenuCollapsed: false,
};

export const toggleSideMenuCollapsed = createAction('toggleSideMenuCollapsed');

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleSideMenuCollapsed, (state) => {
      state.isSideMenuCollapsed = !state.isSideMenuCollapsed;
    });
  },
});

export const selectIsSideMenuCollapsed = (state: RootState) => state.common.isSideMenuCollapsed;

export default commonSlice.reducer;
