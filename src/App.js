import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageUrls from './Data.json';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <Container className="App">
      <Header title={"Horned Beasts"}/>
      <Main ImageUrls={ImageUrls}  />
      <Footer text={"Your vote matters!"}/>
      </Container>
    );
  }
}

export default App;
