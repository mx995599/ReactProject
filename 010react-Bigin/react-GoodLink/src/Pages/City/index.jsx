import React from "react";
import CityHead from "../../components/Head"
import CityCurrent from "./CityCurrent"
import CityList from "./CityList"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import  * as cityActions  from "../../antions/city";
 class City extends React.Component{

    onChangecity=(e)=>{
        console.log(e)
        this.props.cityActions.changeCity({
            cityName:e
        })
        localStorage.setItem('cityName',e)
    }

    render (){
        return (
            <div>
                <CityHead title={"城市选择"}/> 
                <CityCurrent city={this.props.city.cityName}/>
                <CityList onChangecity={this.onChangecity} />
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

const mapStateToProps=(state)=>{
    return{
        city:state.city
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)