import React from "react"
import {connect } from "react-redux"
import UserInfo from "./UserInfo"
import CartList from "./CartList";
import CartHead from "../../components/Head";
 class Cart extends React.Component{

    componentDidMount(){
        if(!this.props.login.username){
            this.props.history.push("/login")
        }
    }

    
    render (){
  
        return(
            <div>
                <CartHead title="个人中心"/>
                <UserInfo login={this.props.login} city={this.props.city} />
                <CartList login={this.props.login} />
            </div>
        )
    }
}
const mapStateToProps =state=>{
    return {
        login:state.Login,
        city:state.city
    }
}
export default connect(mapStateToProps)(Cart)