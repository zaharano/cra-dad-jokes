import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css'

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxList: [] };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    let newBox = {
      width: `${box.width}px`,
      height: `${box.height}px`,
      color: box.color,
      id: uuidv4() 
    }
    this.setState(st => ({
      boxList: [
        ...st.boxList, newBox
      ] 
    }))
  }

  removeBox(remID) {
    this.setState({
      boxList: this.state.boxList.filter(box => box.id !== remID)
    })
  }

  render() {
    let boxRender = [];
    for (let box of this.state.boxList) {
      boxRender.push(
        <Box
          width={box.width}
          height={box.height}
          backgroundColor={box.color}
          key={box.id}
          id={box.id}
          destroy={this.removeBox}
        />
      );
    }
    return (
      <div className="BoxList">
        <NewBoxForm addBox={this.addBox}/>
        {boxRender}
      </div>
    );
  }
}
