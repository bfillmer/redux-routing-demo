import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loadLogin} from 'state/actions'

import {View} from './View'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadLogin: () => dispatch(loadLogin())
})

class Container extends Component {
  componentWillMount () {
    this.props.loadLogin()
  }

  render () {
    return (<View />)
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Container)
