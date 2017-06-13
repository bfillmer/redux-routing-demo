
import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadLogin: () => dispatch({type: 'LOAD_LOGIN'})
})

class Container extends Component {
  componentWillMount () {
    this.props.loadLogin()
  }

  render () {
    return (<h1>LOGIN VIEW</h1>)
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Container)
