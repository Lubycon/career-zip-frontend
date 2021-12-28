import { createAsyncThunk, createSlice, isRejectedWithValue, createAction } from '@reduxjs/toolkit';
import { RootState } from 'slices';
import { IArchivingList } from 'types/index';
import { getArchivingList } from 'api/archiving-list';

export const ORDER_BY = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type TOrderBy = typeof ORDER_BY[keyof typeof ORDER_BY];

interface IInitialState {
  isLoading: boolean;
  orderBy: TOrderBy;
  totalDataCount: number;
  currentPage: number;
  list: {
    id: number;
    startDate: string;
    endDate: string;
    createdDateTime: string;
    projects: { id: number; title: string }[];
  }[];
  page: {
    totalPages: number;
    currentPage: number;
    firstPage: boolean;
    lastPage: boolean;
  };
}

const PAGE_SIZE = 7;
const initialState: IInitialState = {
  isLoading: false,
  orderBy: ORDER_BY.DESC,
  totalDataCount: 0,
  list: [],
  currentPage: 1,
  page: {
    totalPages: 1,
    currentPage: 1,
    firstPage: true,
    lastPage: true,
  },
};

export const setOrderBy = createAction<TOrderBy>('setOrderBy');
export const setCurrentPage = createAction<number>('setCurrentPage');

export const getArchivingListAsync = createAsyncThunk<IArchivingList, void, { state: RootState }>(
  'getArchivingListAsync',
  async (args, thunkAPI) => {
    const { currentPage, orderBy } = thunkAPI.getState().archivingList;
    const params = { page: currentPage, direction: orderBy, size: PAGE_SIZE };
    try {
      const {
        data: { data },
      } = await getArchivingList(params);
      return data;
    } catch (err) {
      isRejectedWithValue(err.response.data);
    }
  }
);

const archivingList = createSlice({
  name: 'archivingList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOrderBy, (state, action) => {
        state.orderBy = action.payload;
      })
      .addCase(setCurrentPage, (state, action) => {
        state.currentPage = action.payload;
      })
      .addCase(getArchivingListAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getArchivingListAsync.fulfilled, (state, action) => {
        const { archives, pageDetails } = action.payload;
        const { totalPages, currentPage, firstPage, lastPage } = pageDetails;
        state.list = archives;
        state.page = { totalPages, currentPage, firstPage, lastPage };
        state.isLoading = false;
      })
      .addCase(getArchivingListAsync.rejected, (state, action) => {
        state.isLoading = false;
        throw new Error('an error has occured');
      });
  },
});

export const selectIsLoading = (state: RootState) => state.archivingList.isLoading;
export const selectArchivingList = (state: RootState) => state.archivingList.list;
export const selectOrderBy = (state: RootState) => state.archivingList.orderBy;
export const selectCurrentPage = (state: RootState) => state.archivingList.currentPage;
export const selectPageInfo = (state: RootState) => state.archivingList.page;

export default archivingList.reducer;
