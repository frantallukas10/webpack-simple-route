import React, { Component } from 'react';

class Bundle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mod: undefined
        }
    }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({ mod: undefined })
    props.load().then((loaded) => this.setState({ mod: loaded }))
  }

  render() {
    return ( this.state.mod ? <this.state.mod {...this.props.pass}/> : <p> loading... </p> )
  }
}

export default Bundle
