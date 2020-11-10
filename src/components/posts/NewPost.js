import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../actions/addPost';
import './NewPost.scss'


function NewPost() {
    const [post, setNew ] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const sendPost = (e) => {
        e.preventDefault();
        dispatch(addPost(post))
        history.push('/home')

    }

    return (
        <div className="container newpost">
            <Form onSubmit={sendPost}>
                <FormGroup>
                    <FormLabel>
                        Write a new post down there..
                    </FormLabel>
                    <FormControl value={post} onChange={(e) => setNew(e.target.value)} as="textarea" rows={4} />
                </FormGroup>
                
                <Button type="submit" variant="primary">Publish</Button>
            </Form>
        </div>
    )
}

export default NewPost
