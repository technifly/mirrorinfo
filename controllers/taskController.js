
import Task from "../models/Task.js";

export const getAlltask = async (req, res) => {
    let tasks;
    try {

        tasks = await Task.find();

        if (!tasks) {
            return res.status(404).json({ msg: 'task table is empty.' });
        }
        else {
            return res.status(200).json({ tasks });
        }

    } catch (err) {
        console.log(err);
    }
};

export const addTasks = async (req, res) => {
    let { title, description, status } = req.body;
    let taskexist;
    try {
        taskexist = await Task.findOne({ title });

        if (taskexist) {
            return res.status(400).json({ msg: 'task already exist.' });
        }
        else {
            const task = new Task({
                title,
                description,
                status
            });
            await task.save();
            return res.status(201).json({ task });
        }

    } catch (err) {
        console.log(err)
    }

};

export const getOnetask = async (req,res)=>{
    let {id} = req.params.id;
    try {
        const tid = await Task.findOne({id});
        console.log(tid)
        if(tid){
            return res.status(200).json({tid});
        }
        else{
            return res.status(404).json({msg:"not found."})
        }
    } catch (err) {
        console.log(err);
    }
};

export const updateTask = async (req,res)=>{
    let id = req.params.id;
    let {title,description,status} = req.body;

    let task;
    try {
        task = await Task.findByIdAndUpdate(id,{title,description,status});
        return res.status(201).json({msg:'updated successfully'});
    } catch (err) {
        console.log(err);
    }

};

export const deleteTask = async (req,res)=>{
    let id = req.params.id;
    
    try {
         await Task.findByIdAndDelete(id);
        return res.status(201).json({msg:"deleted successfull."});
    } catch (err) {
        console.log(err)
    }
}