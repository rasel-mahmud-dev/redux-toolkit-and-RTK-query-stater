import {configureStore} from "@reduxjs/toolkit"
import { postSlice } from "./postSlice"


 const store = configureStore({
    reducer: {
        [postSlice.reducerPath]: postSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postSlice.middleware),
})


export default store

