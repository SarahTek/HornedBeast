import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageUrls from './Data.json';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import FilterForm from './FilterForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      ImageUrls: ImageUrls
    }
  }
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleOpenModal = (beastName) => {
    const selectedBeast = ImageUrls.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast })
  };
  updatedFilterBeasts = (filterBeastArray) => {
    this.setState({ ImageUrls: filterBeastArray });
  }

  numberOfHorns = (event) => {
    event.preventDefault();
    this.setState({ Horns: event.target.value });
  }


  render() {
    return (
      <Container className="App" >
        <Header title={"Horned Beasts"} />
        <FilterForm ImageUrls={ImageUrls} updatedFilterBeasts={this.updatedFilterBeasts} />
        <Main
          ImageUrls={this.state.ImageUrls}
          handleOpenModal={this.handleOpenModal} />

        <SelectedBeast
          show={this.state.showModal}
          handleClose={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer text={"Your vote matters!"} />


      </Container>
    );
  }
}

export default App;
