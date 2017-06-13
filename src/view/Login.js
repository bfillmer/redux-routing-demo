
import React, {Component} from 'react'
import {connect} from 'react-redux'

const View = () => (
  <div>
    <h1>LOGIN VIEW</h1>
    <a href='/editor'>Editor</a>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadLogin: () => dispatch({type: 'LOAD_LOGIN'})
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
