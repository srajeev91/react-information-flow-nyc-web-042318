import React from 'react'


const Tier3 = (props) => (
  // this component does not need to change (but feel free to change however you like!)
  <div className="tier3" onClick={props.handleChildClick} style={{backgroundColor: props.newColor, color: props.newColor}}></div>
)

export default Tier3
