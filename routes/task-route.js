
import express from 'express';
import {addTasks, deleteTask, getAlltask, getOnetask, updateTask} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAlltask);
router.post('/add', addTasks);
router.get('/:id',getOnetask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask)

export default router;