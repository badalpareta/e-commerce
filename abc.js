// process.on("exit",()=>{
//     console.log("Exited")
// })

// const EE=require('events')
// class ReadFile extends EE{
// constructor(filename)
// {
//     super()
//     this.filename=filename;
//     setTimeout(()=>{
// this.emit('1223',Math.round(Math.random()*100))
//     },2000)

// }
// }
// let file=new ReadFile("abcd")
// file.on('1223',(e)=>{
//     console.log(`${e} file opened`)
// })
// file.on("exit",()=>{
//     console.log("File Ended")
// })



// var events=require('events')
// var eventEmitter=new events.EventEmitter();
// var myEventHandler=function(){
//     console.log("Hi Node...")
// }
// eventEmitter.on("hi",myEventHandler)
// eventEmitter.emit("Hello")


// let os=require("os");
// console.log(os.freemem());

// let path=require('path')
// let file=path.basename("C:\\abc.html")
// console.log(file)



// let events=require("events");

// class FoodOrder extends events{
//     constructor(food)
//     {   super();
//         this.food=food;
//         setTimeout(()=>{
//             this.emit("processing",food)
//         },100)
//     }
// }
// let order=new FoodOrder("Dosa");
// order.on("processing",(data)=>{
//     console.log(`${data} Ordered`)
// })



let fs=require('fs');
fs.readFile("abc.js",'ascii',(_,data)=>{
    console.log("Read",data.toLocaleLowerCase())
})