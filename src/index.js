import React from 'react'
import ReactDom from 'react-dom'
import App from './Components/App/App'

ReactDom.hydrate(
  <App />,
  document.getElementById('root'),
)
