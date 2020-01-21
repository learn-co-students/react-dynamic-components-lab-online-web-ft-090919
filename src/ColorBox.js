import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let newOpacity = parseFloat((this.props.opacity - 0.1).toFixed(1))


    return this.props.opacity >= 0.2 ? (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {}
        <ColorBox opacity={newOpacity} />
      </div>
    ) : null
  }
}
