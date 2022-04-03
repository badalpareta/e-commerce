const express = require("express");
const app=express()
const port =process.env.PORT|5000
const dbConnection=require('./db')
const Products=require('./models/productModel')
app.use(express.json())
app.get('/productsListing',async(req,res)=>{
    try{
        let prodData=await Products.find()
        res.send(prodData)
    }
    catch(e){
        res.send(e);
    }
})

if(process.env.NODE_ENV==='production')
{
    app.use('/',express.static("client/build" ))
    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'client/build/index.html')))
}
app.get('/',(req,res)=>res.send("Hello World"))
app.use('/api/users/',require('./routes/userRoutes'))
app.listen(port,()=>console.log("Node Server Started"))