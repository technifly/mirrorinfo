
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/task-route.js';

const app = express();
app.use(express.json());

app.use('/api/tasks', router);

mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>app.listen(5556))
.then(()=>
console.log("connected to database and listening to localhost 5556"))
.catch((err)=>console.log(err));