import React, { createContext, useState } from 'react'
import { generateID } from '../utils/generateID'

const INITIAL_VALUE = { tasks: [] }

export const TodoContext = createContext(INITIAL_VALUE)

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTask = (content) =>
    setTasks([...tasks, { id: generateID(), content }])
  const remTask = (taskID) =>
    setTasks(tasks.filter((task) => task.id !== taskID))

  return (
    <TodoContext.Provider value={{ tasks, addTask, remTask }}>
      {children}
    </TodoContext.Provider>
  )
}
