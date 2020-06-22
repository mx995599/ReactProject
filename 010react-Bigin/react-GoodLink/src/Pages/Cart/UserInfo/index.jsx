import React from "react";
import "./style.less"


export default class UserInfo extends React.Component{
    render(){
        const {login,city} = this.props
        console.log(login,city)
        return(
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    <span>{ login.username}</span>
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    <span> { city.cityName }</span>
                </p>
               
            </div>
        )
    }
}