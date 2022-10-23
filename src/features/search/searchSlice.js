import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSong } from "../../api/songApi";

export const getSongByName = createAsyncThunk('song/getSong', async (param) => {
    const response = await getSong(param)
    return response.data.data.songs
})
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        listSongsName: [],
    },
    reducers: {
        clearListSong: state => {
            state.listSongsName = []
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getSongByName.fulfilled, (state,action) => {
            state.listSongsName = action.payload
        })
    }
})

export const {clearListSong} = searchSlice.actions

export default searchSlice.reducer