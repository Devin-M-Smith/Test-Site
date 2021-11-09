import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <div id='main'>
      <Router basename='/Test-Site'>
        <div className='topper'>
        <Navbar/>
        </div>
        <div className='rest'>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" />
        </Switch>
        </div>
      </Router>
    </div>
);
}

export default App;