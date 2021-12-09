import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {Switch, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
  return (
    <div id='main'>
        <div className='topper'>
        <Navbar/>
        </div>
        <div className='rest'>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </div>
    </div>
);
}

export default App;