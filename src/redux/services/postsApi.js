import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apis from "src/apis";

// for Custom RTK
const axiosBaseQuery = () => {
    return async ({url, method, data, params}) => {
        try {
            const result = await apis({url: url, method, data, params})
            return {data: result.data}
        } catch (axiosError) {
            let err = axiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }
}



export const postApi = createApi({
    reducerPath: "postsApi",
    baseQuery: axiosBaseQuery(),
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