
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {View} from 'view/Editor/View'

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
