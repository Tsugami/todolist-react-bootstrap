import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import { generateID } from './utils/generateID'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const onNewTask = (event) => {
    event.preventDefault()
    setTasks(tasks.concat({ id: generateID(), content: newTask }))
    setNewTask('')
  }

  return (
    <Container>
      <TodoForm
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onSubmit={onNewTask}
      />
    </Container>
  )
}

export default App
