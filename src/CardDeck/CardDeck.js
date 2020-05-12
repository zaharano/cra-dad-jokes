import React, { Component } from 'react'
import Card from './Card'
import './CardDeck.css'
const API_BASE = `https://deckofcardsapi.com/api/deck/`

export class CardDeck extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       deck_id: '',
       remaining: 0,
       cards: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.drawCard = this.drawCard.bind(this);
  }
  
  static defaultProps = {
    deckNum: 1,
  };

  async componentDidMount() {
    let response = await fetch(`
      ${API_BASE}new/shuffle/?deck_count=${this.props.deckNum}
    `);
    let deckData = await response.json();
    this.setState({ 
      deck_id: deckData.deck_id,
      remaining: deckData.remaining,
    })
  }

  handleClick() {
    if (this.state.remaining === 0) {
      this.shuffle()
    } else {
      this.drawCard()
    }
  }

  async shuffle() {
    let response = await fetch(`
      ${API_BASE}${this.state.deck_id}/shuffle/
    `)
    let shuffleData = await response.json();
    this.setState({
      cards: [],
      remaining: shuffleData.remaining
    })
  }

  async drawCard() {
    let response = await fetch(`
    ${API_BASE}${this.state.deck_id}/draw/?count=1
    `);
    let drawData = await response.json();
    this.setState(st => ({ 
      cards: [ ...st.cards, ...drawData.cards ], 
      remaining: drawData.remaining 
    }))
  }

  render() {
    const pile = this.state.cards.map((card) => (
      <Card
        key={card.code}
        id={card.code}
        value={card.value}
        suit={card.suit}
        image={card.image}
      />
    ));
    return (
      <div className="CardDeck">
        <button onClick={this.handleClick}>
          {this.state.remaining > 0 ? `Draw a Card!` : `Shuffle!`}
        </button>
        <div className="CardDeck-pile">{pile}</div>
      </div>
    )
  }
}

export default CardDeck