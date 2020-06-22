const express =require("express")
const app = express();
const router =require("./router")

app.use("/api",router)



app.listen(3050,()=>{
    console.log("服务器运行在3050端口上")
})