import React from "react"
 import "./style.less"
 
export default class BuyAndStoreView extends React.Component{

  
    ClickStoreHandle(){
        this.props.onStore()
    }
    
    render (){
        const {isCollect} = this.props
        return(
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        isCollect?
                        <button className="selected o" onClick={this.ClickStoreHandle.bind(this)} > 已收藏 </button>
                        : <button className="selected" onClick={this.ClickStoreHandle.bind(this)} > 收藏 </button>
                    }
                   
                    
                </div>
                <div className="item-container float-right">
                    <button className="selected"> 购买 </button>
                </div>
                   
            </div>
        )
    }
}