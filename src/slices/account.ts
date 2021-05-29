import { createAction, createSlice } from '@reduxjs/toolkit';
import { withPayloadType } from '../utils/slices';

interface TAccountInfo {
  id: number;
  name: string;
  job: string;
  email: string;
  avatarUrl: string;
  role: string;
}

interface TInitialState extends TAccountInfo {
  test: string;
}

export const setAccountInfo = createAction('setAccountInfo', withPayloadType<TAccountInfo>());

const initialState: TInitialState = {
  id: -1,
  name: '',
  job: '',
  email: '',
  avatarUrl: '',
  role: '',
  test: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAccountInfo, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default accountSlice.reducer;
