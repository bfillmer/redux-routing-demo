
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loadEditor} from 'state/actions'

import {View} from './View'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadEditor: () => dispatch(loadEditor())
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
