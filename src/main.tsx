import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'virtual:windi.css'
import Router from './router/router'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
