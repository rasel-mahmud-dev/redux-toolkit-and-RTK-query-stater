import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl  = "https://jsonplaceholder.typicode.com"

export const postSlice = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ["Posts"],
    endpoints: (builder)=>({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ["Posts"]
        }),
        addPost: builder.mutation({
            query: (post)=>({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Posts"]
        }),
        deletePost: builder.mutation({
            query: ({postId})=>({
                url: "/posts/"+postId,
                method: "DELETE",
                body: postId
            }),
            invalidatesTags: ["Posts"]
        })
    })
})




export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postSlice 