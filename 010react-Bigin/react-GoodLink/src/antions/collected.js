import { COLLECTED,UNCOLLECTED } from "../constants"

export function collected(data){
    return{
        type:COLLECTED,
        data
    }
}
export function uncollected(data){
    return{
        type:UNCOLLECTED,
        data
    }
}