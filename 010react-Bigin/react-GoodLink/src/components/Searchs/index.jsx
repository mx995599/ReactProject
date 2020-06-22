import React from "react";
import "./style.less"
import { withRouter } from "react-router-dom" 

 class SearchInput extends React.Component{

    constructor(){
        super();
        this.state={
            searchValue:''
        }
    }
    onChangeValue=(e)=>{
        this.setState({
            searchValue:e.target.value
        })
    }

    onKeyUp=(e)=>{
        if(e.keyCode == 13){
            this.props.history.push("/search/"+this.state.searchValue)
        }
    }
    componentDidMount(){
      if(this.props.keyword){
        this.setState({
            searchValue:this.props.keyword
        })
      }
    }
    componentDidUpdate(prevProps){
       const keyword= this.props.keyword
       if( prevProps.keyword!==keyword){
        this.setState({
            searchValue:keyword
        })
       }
    }


    render (){
        const {searchValue} = this.state
        return(
            <input 
            type="text" 
            className="search-input"
            onKeyUp={this.onKeyUp}
            value={searchValue}
            onChange={this.onChangeValue}
            />

        )
    }
}

export default withRouter(SearchInput)