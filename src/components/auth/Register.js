import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/addUser';
import './Register.scss'

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = {name , email , password};
    function validateForm() {
        return email.length > 0 && password.length && name.length > 0;
      }
    const dispatch = useDispatch();
    const submitUser = (e) => {
        e.preventDefault();
        dispatch(addUser(user));
        props.history.push("/")
    }
    
    
    return (
        <div className="container register">
            <h4 className="bad">Register</h4>
            <Form onSubmit={submitUser}>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </Form.Group>
                
                <Button type="submit" disabled={!validateForm()} variant="primary">Submit</Button> 
            </Form>
        </div>
    )
}

export default Register
