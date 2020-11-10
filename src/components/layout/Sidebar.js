import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

function Sidebar() {
    return (
        <div>
            <Link to="/add/post" className="btn btn-success btn-block">
                New
            </Link>
        </div>
    )
}

export default Sidebar
