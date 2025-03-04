import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClickEvent = () => {
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
    }
  
  
  render() {
    return (
      <div className="cell" onClick={this.handleClickEvent} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
