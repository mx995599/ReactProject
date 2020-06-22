import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import {login} from  "../../antions/Login"


 class Login extends React.Component{
    onLogin(data){
    
        //写入redux中
        this.props.login({
            username:data
        })
        window.history.back()
    }
    
    render (){
        return(
            <div> 
                <LoginView onLogin={this.onLogin.bind(this)} />
            </div>
        )
    }
}


export default connect (null,{ login })(Login)