import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JokeList from './JokeList'
import './DadJokes.css'

export class DadJokes extends Component {
  render() {
    return (
      <div className="DadJokes">
        <div className="DadJokes-titlebox">
          <h1>Dad Jokes</h1>
          <FontAwesomeIcon icon={[ 'far', 'rocket-launch' ]} size="3x" color="turquoise"/>
          <button onClick={}>Gimme some new ones</button>
        </div>
        <JokeList />
      </div>
    )
  }
}

export default DadJokes
