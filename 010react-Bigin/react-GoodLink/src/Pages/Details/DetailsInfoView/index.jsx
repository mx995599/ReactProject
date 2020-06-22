import React  from "react";
import "./style.less"
import Tabs from "../../../components/Tabs"
import Comment from "../comment"
import BuyAndStore from "../buyAndStore"

export default class DetailInfoView extends React.Component{

  

    render(){
        const id = this.props.id
        const data=this.props.data
        return(
            <div>
               <Tabs>
                    <div tabName="房屋信息">
                        <div className="detail-info">
                            <h3>{data.title}</h3>
                            <div className="box">
                                <ul>
                                    <li>
                                        <span>{data.price}/月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{data.info.type}</span>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <span>{data.houseType}/月</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>类型:{data.info.type}</p>
                                    <p>朝向:{data.info.orientation}</p>
                                </div>
                                <div className="info-list">
                                    <p>楼层:{data.info.level}</p>
                                    <p>装修:{data.info.style}</p>
                                </div>
                                <div className="info-list">
                                    <p>年限:{data.info.years}</p>
                                </div>
                            </div>
                        </div>
                        <BuyAndStore  id={id}/>
                    </div>
                    <div tabName="评价信息">
                        <div>
                         <Comment id={id} />
                        </div>
                    </div>
               </Tabs>
          
            </div>
        )
    }
}