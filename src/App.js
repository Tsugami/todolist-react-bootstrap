import React, { useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { generateID } from './utils/generateID'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const onNewTask = (event) => {
    if (!newTask) return
    event.preventDefault()
    setTasks(tasks.concat({ id: generateID(), content: newTask }))
    setNewTask('')
  }

  const deleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id !== taskID))
  }

  return (
    <Container className='p-3'>
      <Col>
        <TodoForm
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onSubmit={onNewTask}
        />
        <TodoList tasks={tasks} onDelete={deleteTask} />
      </Col>
    </Container>
  )
}

export default App
