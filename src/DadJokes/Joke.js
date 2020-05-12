import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Joke.css';
import { ReactComponent as Rofl } from './mojis/rofl.svg';
import { ReactComponent as Laugh } from './mojis/laugh.svg';
import { ReactComponent as Smile } from './mojis/smile.svg';
import { ReactComponent as Nonplus } from './mojis/nonplus.svg';
import { ReactComponent as Suspect } from './mojis/suspect.svg';
import { ReactComponent as Rolleyes } from './mojis/rolleyes.svg';
import { ReactComponent as Queasy } from './mojis/queasy.svg';
import { ReactComponent as Shit } from './mojis/shit.svg';

const COLORS = {
  best: 'rgb(141, 189, 189)',
  good: 'rgb(169, 204, 203)',
  ok: 'rgb(196, 221, 217)',
  meh: 'rgb(208, 197, 166)',
  bad: 'rgb(241, 180, 162)',
  awful: 'rgb(235, 146, 114)',
  worst: 'rgb(235, 109, 63)',
  shit: 'rgb(165, 121, 57)',
};

export class Joke extends Component {
  static defaultProps = {
    joke: 'lolllllzzzz',
    score: '-10',
  };

  render() {
    const { score } = this.props;

    let emoji;
    let color;

    if (score > 20) {
      color = COLORS.best;
      emoji = <Rofl />;
    } else if (score <= 20 && score > 10) {
      color = COLORS.good;
      emoji = <Laugh />;
    } else if (score <= 10 && score > 0) {
      color = COLORS.ok;
      emoji = <Smile />;
    } else if (score === 0) {
      color = COLORS.meh;
      emoji = <Nonplus />;
    } else if (score < 0 && score >= -10) {
      color = COLORS.bad;
      emoji = <Suspect />;
    } else if (score < -10 && score >= -20) {
      color = COLORS.awful;
      emoji = <Rolleyes />;
    } else if (score < -20 && score >= -40) {
      color = COLORS.worst;
      emoji = <Queasy />;
    } else {
      color = COLORS.shit;
      emoji = <Shit />;
    }

    const scoreStyle = {
      border: `3px solid ${color}`,
    };

    return (
      <div className="Joke">
        <div className="Joke-score">
          <FontAwesomeIcon
            className="Joke-score-vote"
            icon={['far', 'thumbs-up']}
            size="2x"
            color={color}
            onClick={this.props.upvote}
          />
          <span style={scoreStyle} className="Joke-score-number">
            {this.props.score}
          </span>
          <FontAwesomeIcon
            className="Joke-score-vote"
            icon={['far', 'thumbs-down']}
            size="2x"
            color={color}
            onClick={this.props.downvote}
          />
        </div>
        <div className="Joke-text">{this.props.joke}</div>
        <div className="Joke-emoji">{emoji}</div>
      </div>
    );
  }
}

export default Joke;
