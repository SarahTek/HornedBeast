import React from 'react';
import BeastImage from './BeastImage';
// import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.message}</h2>
      <BeastImage image={this.props.ImageUrls[0].image_url} />
      <BeastImage image={this.props.ImageUrls[1].image_url} />
      <BeastImage image={this.props.ImageUrls[2].image_url} />
      <BeastImage image={this.props.ImageUrls[3].image_url} />
      <BeastImage image={this.props.ImageUrls[4].image_url} />
      <BeastImage image={this.props.ImageUrls[5].image_url} />
      <BeastImage image={this.props.ImageUrls[6].image_url} />
      <BeastImage image={this.props.ImageUrls[7].image_url} />
      <BeastImage image={this.props.ImageUrls[8].image_url} />
      <BeastImage image={this.props.ImageUrls[9].image_url} />
      <BeastImage image={this.props.ImageUrls[10].image_url} />
      <BeastImage image={this.props.ImageUrls[11].image_url} />
      <BeastImage image={this.props.ImageUrls[12].image_url} />
      <BeastImage image={this.props.ImageUrls[13].image_url} />
      <BeastImage image={this.props.ImageUrls[14].image_url} />
      <BeastImage image={this.props.ImageUrls[15].image_url} />
      <BeastImage image={this.props.ImageUrls[16].image_url} />
      <BeastImage image={this.props.ImageUrls[17].image_url} />
      <BeastImage image={this.props.ImageUrls[18].image_url} />
      <BeastImage image={this.props.ImageUrls[19].image_url} />
  
      </>
    )
  }
}

export default Main;
