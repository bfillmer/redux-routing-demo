
import React from 'react'
import {connect} from 'react-redux'

import {componentMap} from 'routes'

const mapStateToProps = state => ({
  id: state.href
})

// @TODO Some type of default component in the advent that, somehow, you hit this
// without the initialState set without a route.
export const Container = ({id}) => {
  const View = componentMap[id] ? componentMap[id]() : null
  return (<View />)
}

export const App = connect(mapStateToProps)(Container)
