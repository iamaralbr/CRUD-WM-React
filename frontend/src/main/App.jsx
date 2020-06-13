import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import history from './history'
import { Router } from 'react-router'

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Routes from './Routes'
import Footer from '../components/template/Footer';

const App = props =>
  <BrowserRouter>
    <Router history={history}>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </Router>
  </BrowserRouter>

export default App;
