
import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadEditor: () => dispatch({type: 'LOAD_EDITOR'})
})

class Container extends Component {
  componentWillMount () {
    this.props.loadEditor()
  }

  render () {
    return (<h1>EDITOR VIEW</h1>)
  }
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(Container)
