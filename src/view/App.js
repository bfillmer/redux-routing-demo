
import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Login} from 'view/Login'
import {Editor} from 'view/Editor'
import {LoadingOverlay} from 'view/LoadingOverlay'

const mapStateToProps = state => ({
  loading: state.loading
})

export const Container = ({loading}) => (
  <Router>
    <div>
      {loading && <LoadingOverlay /> }
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/editor" component={Editor}/>
    </div>
  </Router>
)

export const App = connect(mapStateToProps)(Container)
