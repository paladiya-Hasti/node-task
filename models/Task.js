const mongoose=require("mongoose")

const TaskSchema= new mongoose.Schema({
  name:{type:String,required:[true,'Task name is required']},
  descript:{type:String} ,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
})

module.exports=('Task',TaskSchema)