import React from "react";
import "./style.less";
import { Link } from "react-router-dom"
import SearchInput from "../Searchs"

export default class HeadNav extends React.Component{

    render(){
        return (
            <div id="home-header" className ="clear-fix">
                <div className="home-header-left float-left">
                    <Link to ="city">
                    <span>{ this.props.city }</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/cart">
                        <i className="iconfont icon-car"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput />
                    </div>
                </div>
            </div>
        )
    }
}

