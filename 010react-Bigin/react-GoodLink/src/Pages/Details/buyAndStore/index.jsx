import React from "react"
import BuyAndStoreView from "../buyAndStoreView"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"

import {collected,uncollected} from "../../../antions/collected"
 class BuyAndStore extends React.Component{

    constructor(){
        super();
        this.state={
            isCollect:false
        }
    }

    componentDidMount(){
        this.setState({
            isCollect:this.isStore()
        })
    }

    onStore(){
        if(this.props.login.username){
            //已登录
          if(this.isStore()){
            //取消收藏的功能
            this.props.uncollected({
                id:this.props.id
            })
            this.setState({
                isCollect:false
            })
          }else{
            //   收藏功能
            this.props.collected({
                id:this.props.id
            })
            this.setState({
                isCollect:true
            })
          }
         
        }else{
            //未登录
            this.props.history.push("/login")
        }
    }

    isStore(){
        const currentId=this.props.id
        const collects = this.props.collects
        return collects.some(element=>{
            return element.id==currentId
        })
    }
    
    render (){
        return(
            <div> 
               <BuyAndStoreView isCollect={this.state.isCollect}  onStore={this.onStore.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        login:state.Login,
        collects:state.collectde
    }
  
}


export default withRouter(connect(mapStateToProps,{collected,uncollected})(BuyAndStore))