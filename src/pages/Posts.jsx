import React from "react";
import "./posts.scss";

import { useDispatch, useSelector } from "react-redux";

import {
    postApi,
    useAddPostMutation,
    useDeletePostMutation,
    useGetPostsQuery,
} from "../redux/services/postsApi";

const Posts = () => {
    const { data: posts, isLoading } = useGetPostsQuery();

    const [trigger, result, lastPromiseInfo] = postApi.endpoints.getPosts.useLazyQuery({});

    const dispatch = useDispatch()

    let [addPost] = useAddPostMutation();
    let [deletePost] = useDeletePostMutation();

    function deletePostHandler(postId) {
        deletePost({ postId });
    }

    async function handleAddPost() {
        // trigger({}, false);
        dispatch(addPost())
    }


    return (
        <div>
            <h1>This is H1 tag</h1>

            <button onClick={handleAddPost}>Add Post</button>

            {isLoading ? (
                <div>
                    <h1>Posts are fetching...</h1>
                </div>
            ) : (
                <div>
                    {posts?.map((post) => (
                        <div className="post" key={post.id}>
                            <p className="post-title">{post.title}</p>
                            <button onClick={() => deletePostHandler(post.id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default Posts