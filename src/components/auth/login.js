import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { getUser } from '../../actions/addUser';
import './login.scss'

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("userId")){
            props.history.push('/home')
        }
    });
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(getUser(email, password, {
            isLogin: true,
            history: props.history
        }));          
    }
    function validateForm() {
        return email.length > 0 && password.length > 0;
      }

    return (
        <div className="container logine">
            <h4 className="bad">Login</h4>
            <Form onSubmit={loginUser}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button disabled={!validateForm()} type="submit" variant="primary">Login</Button> 
                <span><a href="/register">Create a new account</a></span>
            </Form>
        </div>
    )
}

export default Login
