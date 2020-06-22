import React  from "react";
import api from "../../../api"
import SearchListView from "../searchListView"
import LoadMore from "../../../components/LoadMore"


export default class SearchList extends React.Component{

    constructor(){
        super();
        this.state={
            seacrchData:[],
            hasMore:false
        }
    }

    http(keyword,city){
        api.search({
            keyword:keyword,
            city:city
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            this.setState({
                seacrchData:this.state.seacrchData.concat(data.data),
                hasMore:data.hasMore
            })
        })
    }

    componentDidMount(){
        const keyword=this.props.keyword
        const city=this.props.city
        this.http(keyword,city)
    }


    componentDidUpdate(prevProps,prevState){
        if(prevProps.keyword!==this.props.keyword){
            const keyword=this.props.keyword
            const city=this.props.city
            this.http(keyword,city)
    
        }
     
    }
    onLoadMore=()=>{
    
        const keyword=this.props.keyword
        const city=this.props.city
        this.http(keyword,city)
    }



    render(){
        return(
            <div>
               {
                    this.state.seacrchData.length>0?
                    <SearchListView seacrchData={this.state.seacrchData} />
                    : <div>数据正在加载 </div>
               }
               {
                   this.state.hasMore?
                   <LoadMore onLoadMore={this.onLoadMore} />
                   : <div>没有数据了</div>
               }
            </div>
        )
    }
}