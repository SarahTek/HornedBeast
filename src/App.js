import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageUrls from './Data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header title={"Horned Beasts"}/>
      <Main ImageUrls={ImageUrls} message= {"Click your favBeast!"} />
      <Footer text={"Your vote matters!"}/>
      </div>
    );
  }
}

export default App;
