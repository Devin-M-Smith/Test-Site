import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <div id='whole'>
      <Router basename='/Test-Site'>
        <Navbar/>
        <div className='page'>
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