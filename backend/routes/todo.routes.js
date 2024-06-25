import express from 'express'
const router = express.Router();
import { fetchTodos, addTodo} from '../controllers/todo.controller.js'

router.get('/fetchTodos', fetchTodos)
router.post('/addTodo', addTodo)

export default router;