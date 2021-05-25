import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    name: '',
    email: '',
    occupation: '',
  },
  reducers: {},
});

export default accountSlice.reducer;
