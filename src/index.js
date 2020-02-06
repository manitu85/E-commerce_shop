import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import App from './App'
import './globals.scss'


let app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

let root = document.getElementById("root");

render(app, root)


