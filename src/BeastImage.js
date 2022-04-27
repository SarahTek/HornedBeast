import React from 'react';
import BeastImage from './BeastImage';


class BeastImage extends React.Component {
  render() {
    return (
      <>
      <img src={this.props.image} alt="" />
  
      </>
    )
  }
}

export default BeastImage;
