// reducer related to auth state;

import {SUCCESS,LOADING,ERROR} from "./action"

function reducer(state,action){
    switch(action.type){
        case SUCCESS:
            return {...state,token:action.payload.token,isAuth:true,loading:false,error:false}
        case LOADING : 
            return {...state,token:null,isAuth:false,loading :true,error:false}
        case ERROR :
            return {...state,token:null,isAuth:false,loading:false,error:true}
        default :
            return state

    }
}

export {reducer}