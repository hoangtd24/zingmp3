import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/search/searchSlice"
import themeReducer from "../features/theme/themeSlice"
const store = configureStore({
    reducer: {
        song: songReducer,
        theme: themeReducer
    }
})

export default store;