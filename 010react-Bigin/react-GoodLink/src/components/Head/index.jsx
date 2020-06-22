import React from "react"
import "./style.less"
export default class Head extends React .Component{

    HeadBackHead(){
        window.history.back()
    }

    render(){
       
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.HeadBackHead.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}