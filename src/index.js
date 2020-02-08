import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './globals.scss'


const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

<<<<<<< HEAD
const root = document.getElementById("root");
=======
let root = document.getElementById('root')
>>>>>>> 3_forms_and_components

render(app, root)


