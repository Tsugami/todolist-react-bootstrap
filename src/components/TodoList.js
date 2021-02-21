import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id}>
          {task.content}
          <AiFillDelete onClick={(event) => onDelete(task.id, event)} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TodoList
