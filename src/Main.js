import React from 'react';
import BeastImage from './BeastImage';


class Main extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.message}</h2>
      <BeastImage image={this.props.ImageUrls[0]} />
      <BeastImage image={this.props.ImageUrls[1]} />
      <BeastImage image={this.props.ImageUrls[2]} />
      <BeastImage image={this.props.ImageUrls[3]} />
  
      </>
    )
  }
}

export default Main;
