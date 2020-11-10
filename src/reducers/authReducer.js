import { ADD_USER, FOLLOW, GET_USER, GO_PROFILE, REMOVE_USER } from "../actions/types";

const initialState = {
  user:{
    id: localStorage.getItem('userId') || "",
    name: localStorage.getItem('userName') || "",
    followers: [],
  },
  profile: {
      id: "",
      name: "",
      followers: [],
      email:""
  }
};

export default function authReducer (state= initialState, action){
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                user: action.payload
         
            }
        case GET_USER:
            if(action.payload && action.payload.length > 0){
                localStorage.setItem("userId", action.payload[0]._id)
                localStorage.setItem("userName", action.payload[0].name)
                localStorage.setItem("userEmail", action.payload[0].email)
                return {
                    ...state,
                    user: action.payload[0]
                }
            }else{
                return {
                    ...state,
                }
            }
        case REMOVE_USER: 
            localStorage.removeItem("userId")
            localStorage.removeItem("userName")
            localStorage.removeItem("userEmail")
            return {
                ...state
            } 
        case GO_PROFILE:
            return {
                ...state,
                profile: action.payload 
            }     
        case FOLLOW: 
            return {
                ...state,
                profile: action.payload 
            }     
        default: 
            return state;   
    }
}