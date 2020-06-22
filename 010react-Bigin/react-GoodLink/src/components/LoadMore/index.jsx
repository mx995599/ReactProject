import React  from "react";

/* 
*

*/


export default class LoadMore extends React.Component{


    constructor(){
        super();
        this.divLoadMore=React.createRef();
       
    }

    componentDidMount(){

        var timer = null;

        const winHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll",()=>{

          if(this.divLoadMore.current){
                // console.log(this.divLoadMore.current.getBoundingClientRect().top)
            if(timer){
                clearTimeout(timer);
            }
            timer=setTimeout(()=>{
                if(this.divLoadMore.current.getBoundingClientRect().top<winHeight+10){
                    this.props.onLoadMore()
                }
           
            },300)
          }
          

        })
    }

    render(){
        return(
            <div ref={this.divLoadMore}>
                下拉架子啊
            </div>
        )
    }
}