import React  from "react";
import Item from "../item";


export default class SearchListView extends React.Component{

    render(){
        const data = this.props.seacrchData
        return(
            <div className="list-container">
                {
                    data.map((element,index)=>{
                        return <Item key={index} data={element} ></Item>
                        
                    })
                }
                
            </div>
        )
    }
}