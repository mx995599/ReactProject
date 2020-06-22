import {LOGIN} from "../constants"
const initState={}
export default function login(state = initState,action ){
    switch(action.type){
        case LOGIN:
            return state=action.data
        default : 
            return state
    }
}