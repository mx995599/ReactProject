import React from "react"
import "./style.less"

export default class Pagination extends React.Component {
    render() {
       
        const { length, currentIndex} = this.props
        const arr = new Array(length).fill(1);
      
        return (
            <div className="swiper-pagination">
                <ul>
                    {
                        arr.map((element, index) => {
                            return <li className={currentIndex === index ? 'selected' : ''} key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}