import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleStory = createAsyncThunk("singleStory", async (id) => {
  try {
   const story = await axios.get(`/api/stories/${id}`);
   console.log('axios story', story);
   return story.data;
  } catch (err) {
    console.log(err);
  }
});

const singleStorySlice = createSlice({
  name: "singleStory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStory.fulfilled, (state, action) => {
      // Add story to the state
      return action.payload;
    });
  },
});

export const selectSingleStory = (state) => {
    console.log('SINGLE STATE', state);
  return state.singleStory;
};

export default singleStorySlice.reducer;