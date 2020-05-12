import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './JokeTruck.css';

export class JokeLoader extends Component {
  render() {
    return (
      <div className="JokeTruck">
        <FontAwesomeIcon
          icon={['far', 'truck-loading']}
          size="6x"
          spin
          color="#63e89e"
        />
        <h1>Unloading the joke truck...</h1>
      </div>
    );
  }
}

export default JokeLoader;
