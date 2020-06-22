import React  from "react";
import SearchList from "./searchList"
import { connect } from "react-redux"
import SearchHead from "./searchHead"
import { bindActionCreators } from "redux"
import * as searchAction from "../../antions/search"

 class Search extends React.Component{

    componentDidMount(){
        this.props.searchAction.updateSearch(this.props.match.params.keyword)
    }



    render(){
        return(

            <div>
                  <SearchHead keyword={this.props.match.params.keyword}  />
                <SearchList keyword={this.props.match.params.keyword} city={this.props.city.cityName} />
                
            </div>
        )
    }
}
    const mapStateToProps =(state)=>{
        return {
            city:state.city
        }
    }



    const mapDispatchToProps =dispatch =>{
        return {
            searchAction:bindActionCreators(searchAction,dispatch)
        }
    }
export default connect (mapStateToProps,mapDispatchToProps)(Search)