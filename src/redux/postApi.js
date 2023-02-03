import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const postApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["postsApi"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => {
                return {
                    url: "/posts",
                    method: "GET",
                };
            },
            providesTags: ["postsApi"],
        }),
        addPost: builder.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post,
            }),
            invalidatesTags: ["postsApi"],
        }),
        deletePost: builder.mutation({
            query: ({ postId }) => ({
                url: "/posts/" + postId,
                method: "DELETE",
                body: postId,
            }),
            invalidatesTags: ["postsApi"],
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postApi;