import './App.css';
import React , { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
import data from "./data";
import Navigation from './components/navigation';
import Carousell from './components/carousel';
import Cards from "./components/cards";
import Build from "./components/build";
import Transparent from './components/transparent';
import Policy from './components/policy';
import Connect from './components/connect';
import Footer from './components/footer';

class App extends Component {
  state = {};

  render () {
    return (
      <React.Fragment>

        <Navigation data={data}/>

        <Carousell data={data}/>

        <Build img={data[0].img}/>

        <Transparent img={data[0].logoes.background} />

        <Cards data={data}/>

        <Policy img={data[0].logoes.background}/>

        <Connect />

        <Footer img={data[0].logoes.logobot} />

      </React.Fragment>
    );
  } 
}

export default App;
