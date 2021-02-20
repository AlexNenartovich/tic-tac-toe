import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { MenuItem, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Home from "./Routes";
import About from "./Routes";
import MyTest from "./MyTest";
import { withRouter } from 'react-router';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = () => {
    return (
        <div>
        <div>Welcome</div>
    <Router>
     <Switch>
      <Route path = "/" exact strict component = {Home} />
  //    <Route path = "/about" exact strict component = {About} />
      <Route path="/test" exact strict component={MyTest}/>
       </Switch>
     </Router>
    </div>
);
}
export default Test;
