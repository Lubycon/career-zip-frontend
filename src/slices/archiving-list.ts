import { createAsyncThunk, createSlice, isRejectedWithValue, createAction } from '@reduxjs/toolkit';
import { RootState } from 'slices';
import { IArchivingList } from 'types/index';
import { getArchivingList } from 'api/archiving-list';

export enum OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}

interface IInitialState {
  isLoading: boolean;
  orderBy: OrderBy;
  totalDataCount: number;
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

const PAGE_SIZE = 50;
const initialState: IInitialState = {
  isLoading: false,
  orderBy: OrderBy.DESC,
  totalDataCount: 0,
  list: [],
  page: {
    totalPages: 1,
    currentPage: 1,
    firstPage: true,
    lastPage: true,
  },
};

export const setOrderBy = createAction<OrderBy>('setOrderBy');

export const getArchivingListAsync = createAsyncThunk<IArchivingList, void, { state: RootState }>(
  'getArchivingListAsync',
  async (args, thunkAPI) => {
    const {
      page: { currentPage },
      orderBy,
    } = thunkAPI.getState().archivingList;
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

export const selectArchivingList = (state: RootState) => state.archivingList.list;
export const selectOrderBy = (state: RootState) => state.archivingList.orderBy;

export default archivingList.reducer;
