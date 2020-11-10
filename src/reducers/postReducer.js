import { ADD_POST, GET_POSTS, UPDATE_POST } from "../actions/types";

const initialState= {
    post:{
        username: "",
        id: "",
        body: "",
        date: "",
        like: [],
        comment: ""
    },
    posts: []
};

export default function postReducer (state= initialState, action){
    switch(action.type){
        case ADD_POST:
            
            
            return {
                ...state,
                post: action.payload
            
            }
            
        case GET_POSTS:
            return {
                ...state, 
                posts: action.payload
            }
        case UPDATE_POST: 
            return {
                ...state,
            }
        default: return {
            state
        }
    }
}