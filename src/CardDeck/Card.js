import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  constructor(props) {
    super(props)
  
    this._styles = {
      transform: `
        rotate(${Math.floor(Math.random() * 40 - 20)}deg) 
        translate(${Math.floor(Math.random() * 20 - 10)}px, ${Math.floor(Math.random() * 20 - 10)}px)
      `
    }
  }
  
  render() {
    return (
      <img 
        src={this.props.image} 
        alt={`${this.props.value} of ${this.props.suit}`}
        className="Card" 
        style={this._styles}
      />
    )
  }
}

export default Card
