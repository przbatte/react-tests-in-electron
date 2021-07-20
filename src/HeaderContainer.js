import React from 'react'
import { connect } from 'react-redux'

const HeaderContainer = props => {
  return <div>
    <header>{props.header}</header>
    <button onClick={props.changeHeader}>Click me!</button>
  </div>
}

const mapStateToProps = state => ({header: state.header})

const mapDispatchToProps = dispatch => {
  return {
    changeHeader: () => dispatch({type: 'click', header: 'interview'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
