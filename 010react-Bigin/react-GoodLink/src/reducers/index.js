import {combineReducers} from "redux"
import city from  "./city"
import search from "./search"
import Login from "./Login"
import collectde from "./collectde"
const rootReducer= combineReducers({
    city,
    search,
    Login,
    collectde
})

export default rootReducer