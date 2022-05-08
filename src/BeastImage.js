import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';



class BeastImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Votes: "💜"
    }
  }

  
  handleClick = () => {
    this.setState({ Votes: this.state.Votes + "💜" });
  }


  render() {
    return (
      <Card id="beast" className='h-100 p-3 fw-bold'>
        <Container>
          <Card.Title className='fw-bold fs-3'>{this.props.title}</Card.Title>
          <Card.Img
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}

          />
          <Card.Body>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>Votes: {this.state.showModal}</Card.Text>
            <Button onClick={this.handleClick}>{this.state.Votes}</Button>
            <Button onClick={() => this.props.handleOpenModal(this.props.title)}> Click for more details </Button>
           
          </Card.Body>
        </Container>
      </Card>
    );
  }
}


export default BeastImage;
