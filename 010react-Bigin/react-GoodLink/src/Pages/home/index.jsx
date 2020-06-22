import React from 'react';
import FoodNav from '../../components/FoodNav/index';
import HeadNav from "../../components/HeadNav/index"
import Swiper from "../../components/swiper/index"
import HomeHot from "./HomeHot"
import {connect } from "react-redux"

import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"


 class Home extends React.Component{
    render (){
        return (
            <div>
                <HeadNav keyword={this.props.search}  city={this.props.city.cityName}/>
                <Swiper banner={[banner1,banner2,banner3]} />
               <HomeHot city={this.props.city.cityName}/>

               <FoodNav />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        city:state.city,
        search:state.search
    }
}

export default connect(mapStateToProps)(Home)