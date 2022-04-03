const mongoose=require('mongoose');
function connectDB(){
    mongoose.connect('mongodb+srv://badalpareta:Asdasdas@cluster0.kbekk.mongodb.net/ghantees',{useUnifiedTopology:true,useNewUrlParser:true})
    const connection=mongoose.connection
    connection.on('connected',()=>{
        console.log("MongoDB connected")
    })
    connection.on('error',()=>{
        console.log("MongoDB not connected")
    })
}
connectDB()

module.exports=mongoose