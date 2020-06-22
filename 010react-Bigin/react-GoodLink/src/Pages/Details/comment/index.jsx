import React  from "react";
import api  from "../../../api";
import CommentView  from "../commentView/index";


export default class Comment extends React.Component{

    constructor(){
        super();
        this.state={
            commentData:[],
        }
    }



  componentDidMount(){

    api.getcomments(this.props.id).then(res=>res.json()).then(data=>{
        console.log(data)
        this.setState({
            commentData:data.data
        })
    })
  }


  
    render(){
 
        return(
            <div>
                {
                    this.state.commentData.length>0?
                    <CommentView data ={this.state.commentData}/>
                    : <div>数据加载中.....</div>
                }
           
            </div>
        )
    }
}