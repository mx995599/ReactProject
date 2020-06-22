import React  from "react";
import "./style.less"
import {Link} from "react-router-dom"

export default class Item extends React.Component{

    render(){
        const data = this.props.data
        return(
            <Link to ={`/detail/${data.id}`}>
                <div className="list-item" >
                    <img src={ data.img } alt=""/>
                    <div className="mask">
                        <div className="left">
                            <p>{data.title}</p>
                            <p>{data.houseType}</p>
                        </div>
                        <div className ="right">
                            <div className="btn">
                                {data.rentType}
                           
                            </div>
                            <p dangerouslySetInnerHTML={{__html:data.price+"元/月"}} ></p>
                        </div>
                    </div>
                </div>
            </Link>
            
        )
    }
}