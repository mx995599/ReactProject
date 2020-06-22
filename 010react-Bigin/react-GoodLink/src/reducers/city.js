import {INIT_CITY,CHANGE_CITY} from "../constants"

const initState={
    cityName:"上海"
}
export default function city (state=initState,action){
    switch(action.type){
        case INIT_CITY :
            state =action.city 
            return state
        case CHANGE_CITY :
            state=action.city 
            return state
        default :
            return state

    }
}