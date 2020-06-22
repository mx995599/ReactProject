import base from "./base"
import { HttpGet,HttpPost } from "../utils/request"
const api ={
    getHomehot1(city){
        return HttpGet("/api"+base.homehot1+"?city="+city)
    },
    getHomehot2(city){
        return HttpGet("/api"+base.homehot2+"?city="+city)
    },
    search(params){
        return HttpGet("/api"+base.searchs+"?keyword="+params.keyword+"&city="+params.city)
    },
    getDetails(id){
        return HttpGet("/api"+base.details+"?id="+id)
    },
    getcomments(id){
        return HttpGet("/api"+base.comments+"?id="+id)
    },
    getcart(user){
        return HttpGet("/api"+base.cart+"?user="+user)
    },
}
export default api