import { Box, Button, Heading} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import Todo_input from '../components/Todo_input'
import Delete_todos_button from '../components/Delete_todos_button'
import Completed_todos_button from '../components/Completed_todos_button'
import Todo_card from '../components/Todo_card'
import axios from 'axios'

const home = () => {
  const [todos, setTodos] = useState([])
  const [selectedTodos, setSelectedTodos] = useState([])
  const localIpAddress = window.location.hostname;
  useEffect(() => {
    axios.get(`http://${localIpAddress}:3000/api/todo/fetchTodos`)
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  })


  return (
    <Box className='container-box' pr={'10'} pl={'10'} display={'flex'} >
      <Box className='left-container' w={'60%'}>
        <Todo_input /> <Completed_todos_button selectedTodos = {selectedTodos} /> <Delete_todos_button /><br></br>


        {todos.map((todo) => (
          todo.completed === false ? <Todo_card key={todo.id} id={todo._id} title={todo.todo} time={todo.createdAt} selectedTodos={selectedTodos} setSelectedTodos={setSelectedTodos} todo={todo} /> : null
        ))}

      </Box>
      <Box className='right-container'>
        <Heading size={'lg'}>Completed Todos</Heading>
      </Box>
    </Box>
  )
}

export default home