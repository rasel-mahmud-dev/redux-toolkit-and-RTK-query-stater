import { createSlice } from "@reduxjs/toolkit"
import {deletePost, fetchPosts} from "./action"

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
          state.posts = action.payload
        }),


        builder.addCase(deletePost.fulfilled, (state, action) => {
            if(action.payload){
                state.posts = state.posts.filter(post=>post.id !== action.payload)
            }
          })
      },
})




export default postSlice.reducer