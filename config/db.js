const mongoose=require("mongoose")

const dbconnection=async ()=>{
  try{
    await mongoose.connect("mongodb+srv://hastipaladiya2001:TASK123@cluster0.iug4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db connection");
    
  }
  catch(error){
    console.error("error")
  }
}

module.exports=dbconnection