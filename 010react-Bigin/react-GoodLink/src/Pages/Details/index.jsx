import React  from "react";
import DetailInfo  from "./DetailsInfo";
import DetailsHead from "../../components/Head"


export default class Detail extends React.Component{

    render(){
        return(
            <div>
                <DetailsHead title={"详情页面"} /> 
               <DetailInfo id={this.props.match.params.id} />
            </div>
        )
    }
}