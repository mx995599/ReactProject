import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    constructor(){
        super();
        this.state={
            currentIndex:0
        }
    }

    check_title_index(index){
        return this.state.currentIndex === index? "Tab_title active" : "Tab_title"
    }
    check_item_index(index){
        return this.state.currentIndex === index? "show" : "hide"
    }
    clickTabHandle=(index)=>{
        this.setState({
            currentIndex:index
        })
    }


    render(){
        return (
            <div>
                <ul className ="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                        return <li onClick={ ()=>{ this.clickTabHandle(index) } }  className={this.check_title_index(index)}>{element.props.tabName}</li>
                        })
                    }
                </ul>
                <div>
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return (
                                <div className={this.check_item_index(index)}>
                                   {element.props.children}
                                </div>
                            )
                            })
                    }
                </div>
            </div>
        )
    }

}