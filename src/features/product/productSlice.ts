import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProductList } from './productAPI';

export interface ProductState {
  product_code: string;
  name: string;
  description: string;
  uri: string;
}

export interface APIResponse {
  count: number | 0;
  next: number | 0;
  previous: number | 0;
  results: ProductState[] | [];
}

export interface ProductListState {
  status: string;
  data: APIResponse;
}
const initialState: ProductListState = {
  status: 'idle',
  data: {
    count: 0,
    next: 0,
    previous: 0,
    results: [],
  },
};

export const fetchProductListAsync = createAsyncThunk(
  'product/fetchProductList',
  async () => {
    const response = await fetchProductList();
    console.log(response.data);
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    // fetchProductList: (state) => {
    //   state.data = fetchProductListAsync
    // }
    sayHello: (state) => {
      state.status = 'hello';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const { sayHello } = productSlice.actions;

// selectors
export const selectProductList = (state: RootState) => state.product.data;
export const selectStatus = (state: RootState) => state.product.status;

export default productSlice.reducer;
