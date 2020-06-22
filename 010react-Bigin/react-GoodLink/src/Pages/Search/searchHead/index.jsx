import React  from "react";
import "./style.less"
import SearchInput from "../../../components/Searchs"

export default class SearchHead extends React.Component{

    onClick=(e)=>{
        window.history.back()
    }

    render(){
        return(
            <div id ="search-header" className ="clear-fix">
                <span className="back-icon float-left" onClick ={this.onClick}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput keyword={this.props.keyword}/>
                </div>

            </div>
        )
    }
}