import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button'



class BeastImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     votes: 0
    }
  }

  handleClick = (event) => {
    this.props.handleClick(event);
  };
  handleVotes = () => {
    this.setState ({
      votes:this.state.votes + 1,
    });
  
    // if (this.state.status === "Yay!") {
    //   this.setState({ status: "Nay!" });
    // } else {
    //   this.setState({ status: "Yay!" })
    // }
  }

  
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} onClick={() =>this.handleclick(this.props)}>
          <Card.Img src={this.props.image} alt={ this.props.description} title ={this.props.title} horns={this.props.horns} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.state.votes}</Card.Text>
            <Card.Text>This beast has {this.props.horns} horns</Card.Text>
            <Button variant="primary">🖤{this.state.handleVotes}🖤</Button>
          </Card.Body>
        </Card>
        {/* <Image src={this.props.image} alt={"A unicorn and a narwhal nuzzling their horns"} horns={"1"} className="Beastimage"
          onclick={this.handleclick} />
        <h2> {this.state.status} </h2> */}
      </>
    )
  }
}

export default BeastImage;
