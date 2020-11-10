import React, { useState } from 'react'
import * as uuid from 'uuid';
import { Link } from 'react-router-dom'
import {BsFillPersonFill, BsChatSquareDots,BsHeart,BsHeartFill } from "react-icons/bs"
import { Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../actions/addPost';



function Post(props) {
    const {post} = props;
    const myLike = post.doc.like? post.doc.like.filter((l) => l === localStorage.getItem('userId')) : [];
    const [like , setLike ]= useState(myLike.length !== 0);
    const dispatch = useDispatch();
    const likePost = () =>{
      
        dispatch(updatePost(post.doc._id, {
            like: [
                localStorage.getItem('userId')            
            ]
        }))
        setLike(!like);
    }
    const id = post.doc.userid;
    
    return (
        
            <Card className="post"  key={uuid.v4()}>
                       
                       <Card.Header className="hear" as="h4"><Link to={`/profile/${id}`}><BsFillPersonFill /> {post.doc.username}</Link></Card.Header>
                        <Card.Body className="bod">{post.doc.body}</Card.Body>
                        <Card.Footer className="dolly">
                            <button onClick={likePost} className=" btn like">{like && <BsHeartFill/> ||<BsHeart/> }</button>
                            {"  "}<button className="btn comment"><BsChatSquareDots /></button>
                             {"  "}<span className="date">{new Date(post.doc.date).toLocaleString()}</span> </Card.Footer>
                        <Form>
                        <Form.Control size="sm" type="text" placeholder="add your comment" />
                        </Form>
                        {"  "}
                   </Card>
        
    )
}

export default Post
