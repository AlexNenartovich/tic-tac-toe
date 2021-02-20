import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Inter from './Inter';
import Person from './Person';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Board from "./Board";

class App extends React.Component {

    render() {
        return (
          <Fragment>
          <Router>
             <Switch>
             <Route exact strict path="/" component={Board} />
             <Route exact strict path="/person" component={Person} />
             <Route exact strict path="/inter" component={Inter} />
             <Route exact strict path="/home/in" component={Test} />
             </Switch>
          </Router>
            </Fragment>
        );
    }
}

function Welcome() {
    return (
      <div>
        <h>
          Welcome, let us have some fun!
        </h>
          <br></br>
        <Link to="/person">Go to person</Link>
       </div>
    );
}

function Test() {
    return (
    <div>
    <h>
    Thius is just a test
    </h>
    <Link to="/inter">Go to inter</Link>
    </div>
);
}
export default App;

