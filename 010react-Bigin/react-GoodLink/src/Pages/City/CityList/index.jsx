import React from "react"
import "./style.less"

export default class CityList extends React.Component{
    onChengValue(data){
        //多个组件使用 data 这个参数 需要创建redux 来管理数据
       
        this.props.onChangecity(data)

        window.history.back()

    }
    render (){
        return(
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li onClick ={ this.onChengValue.bind(this,"北京")}><span>北京</span></li>
                    <li onClick ={this.onChengValue.bind(this,"上海")}><span>上海</span></li>
                    <li onClick ={this.onChengValue.bind(this,"重庆")}><span>重庆</span></li>
                    <li onClick ={this.onChengValue.bind(this,"太原")}><span>太原</span></li>
                    <li onClick ={this.onChengValue.bind(this,"深圳")}><span>深圳</span></li>
                    <li onClick ={this.onChengValue.bind(this,"天津")}><span>天津</span></li>
                    <li onClick ={this.onChengValue.bind(this,"杭州")}><span>杭州</span></li>
                    <li onClick ={this.onChengValue.bind(this,"沈阳")}><span>沈阳</span></li>
                    <li onClick ={this.onChengValue.bind(this,"昆明")}><span>昆明</span></li>
                    <li onClick ={this.onChengValue.bind(this,"大理")}><span>大理</span></li>
                    <li onClick ={this.onChengValue.bind(this,"拉萨")}><span>拉萨</span></li>
                    <li onClick ={this.onChengValue.bind(this,"长沙")}><span>长沙</span></li>
                    <li onClick ={this.onChengValue.bind(this,"西安")}><span>西安</span></li>
                </ul>
            </div>
        )
    }
}