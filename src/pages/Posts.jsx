import React, { useEffect, useState } from "react"
import "./posts.scss"


import { useAddPostMutation, useDeletePostMutation, useGetPostsQuery } from "../redux/postSlice"

const Posts = () => {

    const {data: posts, isLoading} = useGetPostsQuery()

    let [addPost] = useAddPostMutation()
    let [deletePost] = useDeletePostMutation()


    function deletePostHandler(postId){
        deletePost({postId})
    }
    

    return (
        <div>
            <h1>This is H1 tag</h1>


        <button onClick={()=>addPost({id: 234234, title: "Newq Post........."})} >Add Post</button>

            { isLoading ? (
                <div>
                    <h1>Posts are fetching...</h1>
                </div>
            ) : (
                <div>
                    <h4>{posts.length}</h4>
                    {
                        posts?.map(post=>(
                            <div className="post" key={post.id}>
                                <p className="post-title">{post.title}</p>
                                <button onClick={()=>deletePostHandler(post.id)}>Delete</button>
                            </div>
                        ))
                    }
                
                </div>
            )}
        </div>
    )
}



export default Posts