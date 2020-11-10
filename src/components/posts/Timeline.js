import React, { useEffect } from 'react'
import NewPost from './NewPost'
import Posts from './Posts'
import { getPosts } from '../../actions/addPost';
import { useDispatch } from 'react-redux'
import './Timeline.scss';

function Timeline() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts())
    },[dispatch])
    
    return (
        <div className="container timey">
            <NewPost />
            <Posts />
        </div>
    )
}

export default Timeline