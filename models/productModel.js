const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    brand:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    url2:{
        type:String,
        required:true,
    },
    discPrice:{
        type:Number,
        required:true,
    },
    origPrice:{
        type:Number,
        required:true,
    },
    collectionName:{
        type:String,
        required:true,
    }
})
const productModel=mongoose.model('products' , productSchema)
module.exports=productModel