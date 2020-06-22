import React from "react";
import api from "../../../api"
import CartListView from "../CartListView";

export default class CartList extends React.Component{
    
    constructor(){
        super();
        this.state={
            data:''
        }
    }

    componentDidMount(){
        api.getcart(this.props.login).then(res=>res.json()).then(data=>{
            // console.log(data)
            this.setState({
                data:data
            })
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length>0?
                    <CartListView data={this.state.data} />
                    : <div>数据在加载中。。。。。</div>
                }
            </div>
        )
    }
}