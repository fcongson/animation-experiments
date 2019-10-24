import React from 'react'
import ReactDOM from 'react-dom'
import Typography from './Typography'
import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap');
`

const App = () => <Typography />

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
