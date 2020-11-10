import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.scss';

function Landing() {
    return (
        <div className=" here">
            <div className="container">
            <h2>Welcome to Socializy
            <Link className='btn btn-secondary'  to="/login">
                    Login
                    </Link>
                    <Link className="btn btn-secondary" to="/register" >Register</Link>
            </h2>
                
            </div>
        </div>
    )
}

export default Landing
