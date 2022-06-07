const app=require("./index.js")
const connect=require("./configs/db")


app.listen(3012,async()=>{
    try{
       await connect()
       console.log("listening to port 3012")
    }
    catch(err){
        console.log(err.message)
    }
})