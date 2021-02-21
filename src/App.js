import React, { useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import { generateID } from './utils/generateID'
import { AiFillDelete } from 'react-icons/ai'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const onNewTask = (event) => {
    if (!newTask) return
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
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id}>
            {task.content}
            <AiFillDelete />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

export default App
