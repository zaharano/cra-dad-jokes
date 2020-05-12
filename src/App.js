import React from 'react';
import './App.css';
// import BoxList from './ColorBox/BoxList'
// import CardDeck from './CardDeck/CardDeck'
import JokeList from './DadJokes/JokeList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruckLoading, faSpinnerThird, faThumbsUp, faThumbsDown } from '@fortawesome/pro-regular-svg-icons'

library.add(faTruckLoading, faThumbsDown, faThumbsUp, faSpinnerThird);

function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}

export default App;
