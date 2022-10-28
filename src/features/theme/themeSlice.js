import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: {
            theme: 'default',

        },
        previewTheme:{

        }
        
    },
    reducers: {
        setTheme: (state,action) => {
            state.currentTheme = action.payload
            document.documentElement.setAttribute('data-theme', action.payload.theme)
        },
        previewTheme: (state,action) => {
            state.previewTheme = action.payload
            document.documentElement.setAttribute('data-theme', action.payload.theme)

        }
    }
})

export const {setTheme, previewTheme} = themeSlice.actions

export default themeSlice.reducer