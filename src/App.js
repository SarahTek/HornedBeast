import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageUrls from './Data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleOpenModal = (beastName) => {
    const selectedBeast = ImageUrls.find(beast => beast.title === beastName);
    this.setState({ showModal: true , selectedBeast})
  };
render(){

  return(
    <Container className = "App" >
      <Header title={"Horned Beasts"}/>
      <Main 
      ImageUrls={ImageUrls} 
      handleOpenModal ={this.handleOpenModal}/>
      <Footer text={"Your vote matters!"}/>
      <SelectedBeast 
       show={this.state.showModal}
       handleClose= {this.handleCloseModal}
       selectedBeast={this.state.selectedBeast}
       />

      </Container>
    );
  }
}

export default App;
