import React, { useEffect } from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser, removeUser } from '../../actions/addUser';
import './navbar.scss'

function Navbary() {
    const history= useHistory();
    // const [ id, setId] = useState("");
    const user = useSelector((store)=> store.user.user);
    const dispatch= useDispatch();
    useEffect(()=>{
        const idy = localStorage.getItem("userId");
        if ( idy !== null ){
            dispatch(getUser(),user)
            
        } 
        
    })
    const logyOut = localStorage.getItem("userId");
    const logOut = () => {
        dispatch(removeUser());
        history.push("/")
    } 
    

    return (
        <div>
            <Navbar id="navii" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">Socializy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="responsive-navbar-nav">
            <Nav className="navo">
                    {logyOut ? <Nav.Link href="/home">Timeline</Nav.Link>: null}
                    {logyOut ? <Nav.Link href="/profile">{user.name}</Nav.Link>:<Nav.Link href="/login">Login</Nav.Link>}
                    {logyOut ? <Nav.Link href="/" onClick={logOut}>Logout</Nav.Link>:<Nav.Link href="/register">Register</Nav.Link>}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navbary
