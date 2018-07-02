import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={() => {this.setState({color: getRandomColor()}, () => {this.setState({childColor: getReducedColor(this.state.color)})})}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={"#0F0"} newColor={this.state.childColor}/>
        <Tier2 color={"#0FF"} newColor={this.state.childColor}/>
      </div>
    )
  }
}
