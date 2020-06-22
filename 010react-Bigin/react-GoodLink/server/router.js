const express = require("express");
const router = express.Router()
const homehotData = require("./data/home/homehot")
const homehotDatashanghai=require('./data/home/homehotshanghai')
const url = require ("url")
const searchData = require("./data/searchs")
const detailsData = require("./data/details")
const commentData = require("./data/comment")
const cartData = require("./data/cart")

router.get("/homehot1",(req,res)=>{
    const city = url.parse(req.url,true).query.city
    if(city =="上海"){
        res.send(homehotDatashanghai.hot1)
    }else{
        res.send(homehotData.hot1)
    }
    
})
router.get("/homehot2",(req,res)=>{
    const city = url.parse(req.url,true).query.city
    if(city =="上海"){
        res.send(homehotDatashanghai.hot2)
    }else{
        res.send(homehotData.hot2)
    }
    
})

router.get('/search',(req,res)=>{
    const {keyword,city} = url .parse (req.url,true).query;
    res.send(searchData)
})

router.get("/details",(req,res)=>{
    const {id} = url .parse (req.url,true).query;
    res.send(detailsData)
})
router.get("/comment",(req,res)=>{
    const {id} = url .parse (req.url,true).query;
    res.send(commentData)
})
router.get("/cart",(req,res)=>{
    const {username} = url .parse (req.url,true).query;
    res.send(cartData)
})
module.exports = router