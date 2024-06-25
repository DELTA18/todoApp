import express from 'express'
import cors from 'cors'

import connectToMongodb from './db/connectToMongodb.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

import todo from './routes/todo.routes.js'
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('This is server port for todo app') 
})

app.use('/api/todo', todo)

app.listen(PORT, () => { 
    connectToMongodb();
    console.log(` app listening on port ${PORT}`)
})

