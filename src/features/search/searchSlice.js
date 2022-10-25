import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSong } from "../../api/songApi";

export const getSongByName = createAsyncThunk('song/getSong', async (param) => {
    const response = await getSong(param)
    return response.data.data.songs
})
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: false,
        listSongsName: [],
    },
    reducers: {
        clearListSong: state => {
            state.listSongsName = []
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getSongByName.pending, (state,action) => {
            state.loading = true
        })
        builder.addCase(getSongByName.fulfilled, (state,action) => {
            state.listSongsName = action.payload
            state.loading = false
        })
    }
})

export const {clearListSong} = searchSlice.actions

export default searchSlice.reducer