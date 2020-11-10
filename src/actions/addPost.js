import {ADD_POST, GET_POSTS, UPDATE_POST} from './types';
import Axios from 'axios';
import {toast} from 'react-toastify';

toast.configure();


export const addPost = (post) => async (dispatch) =>{
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.post('http://localhost:5984/social_posts/', {body: post, userid: localStorage.getItem("userId"), username: localStorage.getItem("userName"), date: new Date(), comment: ""},{headers});
    dispatch({
        type: ADD_POST,
        payload: res.doc
    })
    dispatch(getPosts());
    toast.success("Post Published!")

}

export const getPosts = () => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.get('http://localhost:5984/social_posts/_all_docs?include_docs=true&descending=true'
    ,{headers});
    dispatch({
        type: GET_POSTS,
        payload: res.data.rows
    })
}

export const updatePost = (id, changeData) => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.get('http://localhost:5984/social_posts/' + id
    ,{headers});


    const doc = {
        ...res.data,
        ...changeData
    };
    await Axios.put('http://localhost:5984/social_posts/' + id
    ,doc,{headers})
    dispatch({
        type: UPDATE_POST,
        payload: doc
    })
}
