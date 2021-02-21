import React, { createContext, useCallback, useEffect, useState } from 'react'
import { generateID } from '../utils/generateID'

const INITIAL_VALUE = { tasks: [] }

export const TodoContext = createContext(INITIAL_VALUE)

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTask = (content) =>
    setTasks([...tasks, { id: generateID(), content }])
  const remTask = (taskID) =>
    setTasks(tasks.filter((task) => task.id !== taskID))

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    if (Array.isArray(storageTasks)) {
      setTasks(storageTasks)
    }
  }, [])

  const setTasksInLocalStorage = useCallback(() => {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)
  }, [tasks])

  useEffect(() => {
    setTasksInLocalStorage()
  }, [setTasksInLocalStorage])

  return (
    <TodoContext.Provider value={{ tasks, addTask, remTask }}>
      {children}
    </TodoContext.Provider>
  )
}
