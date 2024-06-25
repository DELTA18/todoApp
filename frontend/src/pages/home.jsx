import { Box, Button} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Todo_input from '../components/Todo_input'
import Delete_todos_button from '../components/Delete_todos_button'
import Completed_todos_button from '../components/Completed_todos_button'
import Todo_card from '../components/Todo_card'
import axios from 'axios'

const home = () => {
  const [todos, setTodos] = useState([])
  const localIpAddress = window.location.hostname;
  useEffect(() => {
    axios.get(`http://${localIpAddress}:3000/api/todo/fetchTodos`)
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  })

  return (
    <Box pr={'10'} pl={'10'}>
        <Todo_input /> <Completed_todos_button /> <Delete_todos_button />

        {todos.map((todo) => (
        
          <Todo_card key={todo.id} title={todo.todo} time={todo.createdAt} />
        ))}
    </Box>
  )
}

export default home