import {UPDATE_SEARCH} from "../constants"
export default function search(state="",action ){
    switch(action.type){
        case UPDATE_SEARCH:
            return state=action.data
        default : 
            return state
    }
}