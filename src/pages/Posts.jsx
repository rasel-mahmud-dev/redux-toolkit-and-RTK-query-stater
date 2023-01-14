import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import "./posts.scss"

import {fetchPosts, deletePost} from "../redux/action"

const Posts = () => {

    const {posts} = useSelector(state=>state)
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [])

    const [sum, setSum] = useState(0)


    function deletePostHandler(postId){
        dispatch(deletePost(postId))

    }

    useEffect(()=>{
        dispatch(fetchPosts())
    }, [sum])

    

    return (
        <div>
            <h1>This is H1 tag</h1>

        <button onClick={()=>setSum(sum + 1)} >Inc {sum}</button>

            {  posts?.map(post=>(
                <div className="post" key={post.id}>
                    <p className="post-title">{post.title}</p>
                    <button onClick={()=>deletePostHandler(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}



export default Posts