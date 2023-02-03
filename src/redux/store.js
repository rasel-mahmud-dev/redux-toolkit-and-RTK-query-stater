import {configureStore} from "@reduxjs/toolkit"
import { postsSlice } from "./postsSlice"
import {postApi} from "./postApi"


 const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [postsSlice.name]: postsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
})


export default store

