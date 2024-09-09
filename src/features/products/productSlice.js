import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async(_, thunkAPI)=> {
  try{
    const response = await axios('https://dummyjson.com/products');
    return response.data

  } catch(e){
    console.log(e);
    return thunkAPI.rejectWithValue(e)
  }
})


const initialState ={
  list: [],
  filtered: [],
  // related: [],
  isLoading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers:{
    filterByPrice: (state, {paylod}) => {
      // state.filtered = state.list.filter(({ price }) => price < paylod);
    }
  },
  extraReducers:(builder) => {
    builder.addCase(getProducts.pending, (state, {payload}) => {
      state.isLoading = true;
    }),
    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    }),
    builder.addCase(getProducts.rejected, (state, {payload}) => {
      state.isLoading = false;
      
    })
  }
})
 
export const { filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;