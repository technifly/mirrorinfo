
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskTable  = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    }
}) ;

export default mongoose.model('Task',taskTable);