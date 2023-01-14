import {createAsyncThunk} from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk("posts", async function(state){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()
        return data

    } catch(ex){

    }
})

export const deletePost = createAsyncThunk("posts/delete", async function(postId){
 
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/"+postId, {
            method: "DELETE",
        })
        let data = await res.json()
        return postId

    } catch(ex){
        console.log(ex)
    }
})