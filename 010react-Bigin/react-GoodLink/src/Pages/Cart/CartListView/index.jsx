import React from "react";
import CartListViewItem from "./item";

export default class CartListView extends React.Component{
    render(){

        const data= this.props.data
        // console.log(data)

        return(
            <div>
                {
                    data.map((element,index)=>{
                        return <CartListViewItem key={index} data={element}></CartListViewItem>
                    })
                }
            </div>
        )
    }
}