import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import App from './App'
import './globals.scss'


const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = document.getElementById("root");

render(app, root)


