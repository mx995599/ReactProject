import React from "react"
import CommentItem from "./Item"
import "./style.less"

export default class CommentView extends React.Component{
    render(){
        const data = this.props.data
        return(
            <div className="comment-list " >
              {
                  data.map((element,index)=>{
                    return <CommentItem key={index} data={element} ></CommentItem>
                  })
              }
           
            </div>
        )
    }
}