import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

import './TodoList.css'

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id}>
          <AiFillDelete
            className='delete-button'
            onClick={(event) => onDelete(task.id, event)}
          />{' '}
          {task.content}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TodoList
