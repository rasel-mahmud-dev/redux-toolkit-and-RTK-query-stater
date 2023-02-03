import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "../services/postsApi";

const initialState = {
    filter: {},
    search: "",
};

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: initialState,
    reducer: {
        setFilter: (store, action) => {
            store.filter = action.payload;
        },
        setSearch: (store, action) => {
            store.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        // here custom action dispatch when getPosts RTK query initialize and re-fetch
        builder.addMatcher(
            postApi.endpoints.getPosts.matchFulfilled,
            (state, { payload }) => {
                console.log(payload);
            }
        );
    },
});

export const {} = postsSlice.reducer;
export default postsSlice