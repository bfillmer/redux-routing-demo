
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Login} from 'view/Login'
import {Editor} from 'view/Editor'

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/editor" component={Editor}/>
    </div>
  </Router>
)
