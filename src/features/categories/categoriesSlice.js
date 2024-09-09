import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk('categories/getCategories', async(_, thunkAPI)=> {
  try{
    const response = await axios('https://dummyjson.com/products/categories');
    return response.data

  } catch(e){
    console.log(e);
    return thunkAPI.rejectWithValue(e)
  }
})


const initialState ={
  list: [],
  isLoading: false,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(getCategories.pending, (state, {payload}) => {
      state.isLoading = true;
    }),
    builder.addCase(getCategories.fulfilled, (state, {payload}) => {
      state.list = payload;
      state.isLoading = false;
    }),
    builder.addCase(getCategories.rejected, (state, {payload}) => {
      state.isLoading = false;
      
    })
  }
})

export default categoriesSlice.reducer;