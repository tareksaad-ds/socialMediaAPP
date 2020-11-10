import React, { useEffect} from 'react'
import './Profile.scss'
import image from '../../assests/download.png'
import Posts from '../posts/Posts'
import { Jumbotron } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/addPost';
import { goProfile } from '../../actions/addUser';
import { addFollow } from '../../actions/addUser';

function Profile(props) {
    const userProfile = useSelector((store) => store.user.profile)
    console.log("myfolowers", userProfile.followers);
    const {id} = props.match.params;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
        dispatch(goProfile(id))
    },[dispatch])
    const followUser = () => {
        dispatch(addFollow(id , {
            followers: localStorage.getItem("userId")
        }))
    }
  

    return (
        <div className="container profilee">
            <Jumbotron className="jumbo">
            <img src={image} alt="profile" />
            <h5>{userProfile.name}</h5> 
            <h5>{userProfile.email}</h5>
            {userProfile.followers.id === id ? <button className="btn btn-primary" onClick={followUser}>Follow</button> : <button className="btn btn-warning">Following</button>}
            </Jumbotron>
            <Posts />
        </div>
    )
}

export default Profile
