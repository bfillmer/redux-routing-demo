
import React, {Component} from 'react'
import {connect} from 'react-redux'

const View = () => (
  <div>
    <h1>EDITOR VIEW</h1>
    <a href='/login'>Login</a>
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadEditor: () => dispatch({type: 'LOAD_EDITOR'})
})

class Container extends Component {
  componentWillMount () {
    this.props.loadEditor()
  }

  render () {
    return (<View />)
  }
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(Container)
