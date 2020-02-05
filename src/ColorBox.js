import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

        console.log(this.props.opacity)
        let newValue = this.props.opacity
        if (newValue >= 0.2){
          return(
          <div className="color-box" style={{opacity: newValue /*replace null with the value*/}}>
              <ColorBox opacity={Number((newValue - 0.1).toPrecision(1))} />
          </div>
          )
        } else {
          return (null)
        }
      
  }

}

