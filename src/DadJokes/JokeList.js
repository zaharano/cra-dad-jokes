import React, { Component } from 'react';
import Joke from './Joke';
import JokeLoader from './JokeLoader';
import { ReactComponent as Rofl } from './mojis/rofl.svg';
import './JokeList.css';

const API_BASE = 'https://icanhazdadjoke.com/';
const API_SETTINGS = {
  headers: {
    Accept: 'application/json',
    'User-Agent': 'some dork tryna learn things',
  },
};

export class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
    };

    this.handleButton = this.handleButton.bind(this);
    this.getNewJokes = this.getNewJokes.bind(this);
  }

  async componentDidMount() {
    //populate jokes
    //first check localstorage, if there set array and isLoading
    let list = [];
    if (localStorage.getItem('jokeList')) {
      list = await JSON.parse(localStorage.getItem('jokeList'));
    } else {
      list = await this.getNewJokes();
    }
    this.setState({ list, isLoading: false });
  }

  async getNewJokes() {
    let list = [];
    let fail = 0;
    console.log('inside new joke');
    do {
      let response = await fetch(API_BASE, API_SETTINGS);
      let joke = await response.json();
      fail = fail + 1;
      const dupcheck =
        list.filter((j) => j.id === joke.id).length ||
        this.state.list.filter((j) => j.id === joke.id).length;
      if (dupcheck) {
        continue;
      } else {
        list.push({ joke: joke.joke, id: joke.id, score: 0 });
      }
    } while (list.length < 10 && fail < 20);
    // save array to localStorage
    return list;
  }

  async handleButton() {
    this.setState({ isLoading: true });
    const list = await this.getNewJokes();
    this.setState({ list, isLoading: false });
  }

  vote = (id, add) => {
    const list = this.state.list.map((j) => {
      if (j.id === id) {
        return { ...j, score: j.score + add };
      } else {
        return j;
      }
    });
    this.setState({ list });
  };

  componentDidUpdate() {
    localStorage.setItem('jokeList', JSON.stringify(this.state.list));
  }

  render() {
    const list = this.state.list.map((j) => (
      <Joke
        key={j.id}
        id={j.id}
        joke={j.joke}
        score={j.score}
        upvote={() => this.vote(j.id, 1)}
        downvote={() => this.vote(j.id, -1)}
      />
    ));
    return (
      <div className="DadJokes">
        <div className="DadJokes-titlebox">
          <h1>Dad Jokes</h1>
          <Rofl className="DadJokes-titlebox-emoji" width="200" height="200" />
          <button onClick={this.handleButton}>Gimme some new ones</button>
        </div>
        <div className="JokeList">
          {this.state.isLoading ? <JokeLoader /> : list}
        </div>
      </div>
    );
  }
}

export default JokeList;
