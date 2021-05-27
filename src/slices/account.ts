import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  reducers: {
    setAccountInfo: (state, action: PayloadAction<TAccountInfo>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAccountInfo } = accountSlice.actions;
export default accountSlice.reducer;
