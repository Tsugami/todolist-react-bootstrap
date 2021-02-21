import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { TodoProvider } from './store/TodoContext'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
