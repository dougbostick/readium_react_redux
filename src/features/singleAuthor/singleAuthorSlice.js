import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    info: {},
    comments: [],
    stories: []
};

export const fetchSingleAuthor = createAsyncThunk('singleAuthor', async (id) => {
    try{
        const author = await axios.get(`/api/authors/${id}`);
        return author.data;
    } catch(err){
        console.log(err);
    }
})

const singleAuthorSlice = createSlice({
    name: 'singleAuthor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleAuthor.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});


export const selectSingleAuthor = (state) => {
    return state.singleAuthor;
};

export default singleAuthorSlice.reducer;