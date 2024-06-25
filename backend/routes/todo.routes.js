import express from 'express'
const router = express.Router();
import { fetchTodos, addTodo, deleteTodo , setCompleted} from '../controllers/todo.controller.js'

router.get('/fetchTodos', fetchTodos)
router.post('/addTodo', addTodo)
router.post('/deleteTodo', deleteTodo)
router.post('/setCompleted', setCompleted)

export default router;