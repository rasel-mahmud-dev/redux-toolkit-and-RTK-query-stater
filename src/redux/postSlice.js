import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl  = "https://jsonplaceholder.typicode.com"

export const postSlice = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder)=>({
        getPosts: builder.query({
            query: () => "/posts"
        })
    })
})



export const { useGetPostsQuery } = postSlice 