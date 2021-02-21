import React, { useContext, useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { TodoContext } from './store/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [newTask, setNewTask] = useState('')
  const { tasks, remTask, addTask } = useContext(TodoContext)

  const onNewTask = (event) => {
    event.preventDefault()
    if (!newTask) return
    addTask(newTask)
    setNewTask('')
  }

  return (
    <Container className='p-3'>
      <Col>
        <TodoForm
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onSubmit={onNewTask}
        />
        <TodoList tasks={tasks} onDelete={remTask} />
      </Col>
    </Container>
  )
}

export default App
