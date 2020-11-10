import React from 'react'
import { useSelector } from 'react-redux'
import './Posts.scss'
import Post from './Post';


function Posts() {
    
    const All = useSelector((store) => store.post.posts )
    
    return (
        <div className="posty">
               {All && All.map((post)=>{
                   return  <Post post={post} /> 
                   
               })}        
        </div>
    )
}

export default Posts 
