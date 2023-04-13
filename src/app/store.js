import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice"
import postReducer from "../features/post/postSlice"



export const store = configureStore({
    reducer: {
        posts: postReducer
    }
})