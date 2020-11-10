
import {ADD_USER ,  FOLLOW,  GET_USER, GO_PROFILE, REMOVE_USER} from './types';
import Axios from 'axios';
import {toast} from 'react-toastify';


toast.configure();


export const addUser = (user) => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.post('http://localhost:5984/social_users/', user,{headers});
    dispatch({
        type: ADD_USER,
        payload: res.doc
    })
    toast.success("Successful Register!")
}

export const getUser = (email, password, redirectData = null) => async (dispatch) =>{
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    
         
        const res = await Axios.post('http://localhost:5984/social_users/_find/',{
            selector: {email: {$eq:email}, password: {$eq:password}}
        },{headers});
        dispatch({
            type: GET_USER,
            payload: res.data.docs,
        });
        
        if(localStorage.getItem("userId") === null){
            toast.error("Login Failed")
        }

        if(redirectData && redirectData.isLogin){
            redirectData.history.push('/profile');
        }


}
export const removeUser = () => async (dispatch) => {
    
    
    dispatch({
        type: REMOVE_USER,
    })
}

export const goProfile = (id) => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.get('http://localhost:5984/social_users/'+ id, {headers});
    dispatch({
        type: GO_PROFILE,
        payload: res.data
    }) 

}

export const addFollow = (id, followUser) => async (dispatch) => {
    const headers = {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
    const res = await Axios.get('http://localhost:5984/social_users/' + id
    ,{headers});
    const doc = {
        ...res.data,
        ...followUser
    };
    await Axios.put('http://localhost:5984/social_users/' + id
    ,doc,{headers})
    dispatch ({
        type: FOLLOW,
        payload: doc,
    })
} 
   
