import React from "react"
import Star from "../../../../components/star"
import "./style.less"

export default class CommentItem extends React.Component{
    render(){
        const item= this.props.data;
        return(
            <div className="comment-item ">
                <h3>
                    <i className="icon-user"></i>
                    {item.username}
                </h3>
                <div>
                    <Star star={item.star } />
                </div>
                <p>{item.comment}</p>
            </div>
        )
    }
}