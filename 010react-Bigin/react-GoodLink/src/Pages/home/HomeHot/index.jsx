import React from 'react';
import HomeHotView from '../HomeHotView/index';
import api from "../../../api/index"

export default class HomeHot extends React.Component{

    constructor(){
        super();
        this.state={
            homehot1:[],
            homehot2:[]
        }
    }

    

    componentDidMount(){
        const city= this.props.city
        api.getHomehot1(city)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                homehot1:data
            })

        })
        api.getHomehot2(city)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                homehot2:data
            })
        })
    }

    render (){
        const { homehot1,homehot2 } = this.state
        return (
            <div>
              {
                 homehot1.length>0?<HomeHotView title={"新品推荐"} data={homehot1}  />: <div>等待数据加载。。。</div>
              }
              {
                 homehot2.length>0?<HomeHotView title={"热门推荐"} data={homehot2}  />: <div>等待数据加载。。。</div>
              }
            </div>
        )
    }
}