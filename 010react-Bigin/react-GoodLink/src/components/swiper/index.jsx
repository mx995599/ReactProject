import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./style.less"
import Pagination from "./Pagination"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



  export default class Swiper extends React.Component{
   
    constructor(){
        super();
        this.state={
            index:0,
        }
    }

    handleChengIndex(index){
        this.setState({
            index
        })
    }
    render(){
        const banner=this.props.banner
        const {index} = this.state
        return(
            <div className="swiper">
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChengIndex.bind(this)}>
                {
                    banner.map((element,index)=>{
                        return(
                            <div key={index} className="swiper-view">
                                <img src={element}/>
                            </div>
                        )
                    })
                }
               
            </AutoPlaySwipeableViews>
            <Pagination  length={banner.length} currentIndex={index}  index={index}/>
            </div>
        )
    }
}
  