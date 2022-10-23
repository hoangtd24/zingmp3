import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/search/searchSlice"
const store = configureStore({
    reducer: {
        song: songReducer
    }
})

export default store;