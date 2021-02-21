import React from 'react'
import { Form, Button } from 'react-bootstrap'

const TodoForm = ({ onSubmit, value, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId='TodoForm'>
        <Form.Label>New Task</Form.Label>
        <Form.Control
          value={value}
          onChange={onChange}
          placeholder='Add a task...'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default TodoForm
