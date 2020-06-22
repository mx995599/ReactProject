import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router/router'
import './static/css/common.less'
import "./static/css/font.css"
import "./static/css/iconfont.css"
import store from "./store/index"
import { Provider } from "react-redux"
import * as cityActions from "./antions/city" 


if(localStorage.getItem("cityName")){
    store.dispatch(cityActions.initCity({
        cityName:localStorage.getItem("cityName")
    }))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

,document.getElementById('root'));