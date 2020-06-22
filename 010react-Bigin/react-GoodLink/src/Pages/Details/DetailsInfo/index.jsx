import React  from "react";
import api from "../../../api"
import DetailInfoView from "../DetailsInfoView"
import Swiper from "../../../components/swiper"

export default class DetailInfo extends React.Component{

    constructor(){
        super();
        this.state={
            houseType:{},
            id:''
        }
    }

    componentDidMount(){
        const id=this.props.id
        api.getDetails(id).then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                id:id,
                houseType:data
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.houseType.imgs?
                    <Swiper  banner={this.state.houseType.imgs}></Swiper>
                    :<div>数据加载中</div>
                }
                {
                    this.state.houseType.imgs?
                    <DetailInfoView  data={this.state.houseType} id={this.state.id}/>
                    :<div>数据加载中</div>
                }
            </div>
        )
    }
}