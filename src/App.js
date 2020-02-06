import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage.component'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const  App = () => (
  <Switch>
    <Route exact path='/' component={HomePage}  />
    <Route path='/hats' component={HatsPage}  />
  </Switch>
)

export default App
