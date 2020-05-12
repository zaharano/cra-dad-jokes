import React, { Component } from 'react';
import './Box.css'

export default class Box extends Component {
  handleClick = () => {
    this.props.destroy(this.props.id)
  }

  render() {
    return (
      <div className='Box' style={this.props}>
        <button onClick={this.handleClick}>Remove</button>
      </div>
    );
  }
}
