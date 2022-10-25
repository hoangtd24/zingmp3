import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentBg: {
            layoutBg: '#162a45',
            playerBg: '#172f4f',
            primaryBg: '#203d65',
            bgImage: ''
        },
        previewBg: {
        }
        
    },
    reducers: {
        setBg: (state,action) => {
            state.currentBg = action.payload
        },
        toggleBg: (state,action) => {
            state.previewBg = action.payload
        }
    }
})

export const {setBg, toggleBg} = themeSlice.actions

export default themeSlice.reducer