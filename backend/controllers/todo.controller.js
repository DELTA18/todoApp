import Todo from "../models/todo.model.js"
export const fetchTodos = async (req, res) => {
  const todos = await Todo.find().sort({createdAt: -1})
  .then(todos => {res.json(todos)})
  .catch(err => console.log(err))
}

export const addTodo =  async (req, res) => {
  // console.log(req.body.todo, req.body.additionalInfo)
  const todoToAdd = {
    todo: req.body.todo,
    additionalInfo: req.body.additionalInfo,
  }
  
  console.log(todoToAdd)
  await Todo.create(todoToAdd)
  .then( console.log("Todo added successfully"))
  .catch(err => console.log(err))


}