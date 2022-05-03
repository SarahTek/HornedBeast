import React from 'react';
 import BeastImage from './BeastImage';
import { Row, Col } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <> 
        <Row sm={2} md={3} lg={4} >

          {this.props.ImageUrls.map(image => (
            <Col>
              <BeastImage
                key={image._id}
                title={image.title}
                imageUrl={image.image_url}
                description={image.description}
                handleOpenModal={this.props.handleOpenModal}
              />
            </Col>
          ))}
        </Row>

      </>
    )
  }
}

export default Main;
