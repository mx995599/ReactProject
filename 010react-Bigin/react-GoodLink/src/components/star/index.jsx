import React from "react"
import "./style.less"
export default class Star extends React.Component{

    render (){
        let star = this.props.star
        if(star>=5){
            star=5
        }

        return (
            <div className="star-container">
                {
                    [1,2,3,4,5].map((element,index)=>{
                        let lightClass = star >=element ? " light" : '' 
                        return <i key={index} className={"icon-star" + lightClass}> </i>
                    })
                }
            </div>
        )
    }
}