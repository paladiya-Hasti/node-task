const express=require("express")
const Task = require("../models/Task")
const VaildTask = require("../middleware/VaildTask")
const router=express.Router()


router.get("/",async(req,res)=>{
  try{
    const tasks= await Task.find()
    res.json(tasks) 
  }
  catch(error){
    res.status(500).json({error:error.messahe})
  }
})

router.get("/:id",async(req,res)=>{
  try{
    const{id} = req.params;
    const task=await Task.findById(id)
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);

  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.post("/",VaildTask, async(req,res)=>{
  try{
    const task=new Task(req.body)
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.patch('/:id', VaildTask, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted', task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports=router