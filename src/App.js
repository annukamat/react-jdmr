import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home';
import NavBar from './navbar/navbar';
import CarouselImg from './carousel/carousel';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <CarouselImg />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
