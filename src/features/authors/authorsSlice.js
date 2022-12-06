import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchAuthorsAsync = createAsyncThunk("allAuthors", async () => {
  try {
    const { data } = await axios.get(`/api/authors`);
    console.log('FETCH AUTHORS', data)
    return data;
  } catch (err) {
    console.log(err);
  }
});

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorsAsync.fulfilled, (state, action) => {
      console.log('EXTRA AUTHORS', action.payload)
      return action.payload;
    });
  },
});

export const selectAuthors = (state) => {
  return state.authors;
};
export default authorsSlice.reducer;
