import {UPDATE_SEARCH} from "../constants"

export function updateSearch(data){
    return {
        type:UPDATE_SEARCH,
        data
    }
}