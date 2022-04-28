import React from 'react';
import Image from 'react-bootstrap/Image'



class BeastImage extends React.Component {
  render() {
    return (
      <>
      <Image src={this.props.image} alt={"A unicorn and a narwhal nuzzling their horns"} horns={"1"} className="h-100"/>
  
      </>
    )
  }
}

export default BeastImage;
