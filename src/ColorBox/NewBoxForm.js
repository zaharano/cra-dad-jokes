import React, { Component } from 'react';

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state)
    this.setState({
      width: '',
      height: '',
      color: '',
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        /> <br />
        <label htmlFor="height">Height: </label>
        <input
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        /> <br />
        <label htmlFor="color">Color: </label>
        <input
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        /> <br />
        <button>Add dis</button>
      </form>
    );
  }
}
