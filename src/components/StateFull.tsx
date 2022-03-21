import React, { Component } from 'react'

type StateFullProps = {
  type?: string
}

export default class StateFull extends Component<StateFullProps> {
  state = {
    yes: false,
  }

  onClick = () => {
    this.setState({ yes: !this.state.yes })
  }

  render() {
    if (this.props.type) return <div>{this.props.type}</div>

    return this.state.yes ? (
      <div>StateFull</div>
    ) : (
      <div onClick={this.onClick}>Not Welcome</div>
    )
  }
}
