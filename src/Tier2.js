import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.newColor),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.newColor)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.newColor, color: this.props.newColor}}>
        <Tier3 color={"#0F0"} newColor={this.state.childColor}/>
        <Tier3 color={"#F00"} newColor={this.state.childColor}/>
      </div>
    )
  }
}
