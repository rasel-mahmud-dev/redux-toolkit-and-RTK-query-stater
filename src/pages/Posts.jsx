import React, { useEffect, useState } from "react"
import "./posts.scss"


import { useGetPostsQuery } from "../redux/postSlice"

const Posts = () => {

    const {data: posts, isLoading} = useGetPostsQuery()

    const [sum, setSum] = useState(0)

    function deletePostHandler(postId){
        dispatch(deletePost(postId))

    }
    

    return (
        <div>
            <h1>This is H1 tag</h1>

        <button onClick={()=>setSum(sum + 1)} >Inc {sum}</button>


            { isLoading ? (
                <div>
                    <h1>Posts are fetching...</h1>
                </div>
            ) : (
                <div>
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