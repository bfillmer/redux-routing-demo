
import React from 'react'
import {connect} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import {history} from 'state/store'

import {Login} from 'view/Login/Container'
import {Editor} from 'view/Editor/Container'
import {LoadingOverlay} from 'view/Global/LoadingOverlay/Container'

const mapStateToProps = state => ({
  loading: state.loading.includes('global')
})

export const Container = ({loading}) => (
  <ConnectedRouter history={history}>
    <div>
      {loading && <LoadingOverlay /> }
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/editor" component={Editor}/>
    </div>
  </ConnectedRouter>
)

export const App = connect(mapStateToProps)(Container)
