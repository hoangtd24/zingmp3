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
        toggleTheme: (state,action) => {
            state.previewTheme = action.payload
        }
    }
})

export const {setTheme, toggleTheme} = themeSlice.actions

export default themeSlice.reducer