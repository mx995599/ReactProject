import React from "react"
import "./style.less"


export default class LoginView extends React.Component{

        constructor(){
            super();
            this.state={
                username:''
            }
        }
        onChangeHandle(e){
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        onClickHandle(){
            this.props.onLogin(this.state.username)
        }
    
    render (){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                    type="text " 
                    placeholder="用户名或手机号"
                    value={this.state.username}
                    onChange={this.onChangeHandle.bind(this)}
                    name="username"
                    />
                </div> 
                <div className="input-container phone-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text " placeholder="验证码"/>
                </div> 
                <button onClick={this.onClickHandle.bind(this)} className="btn-login">登录</button>
         
            </div>
        )
    }
}