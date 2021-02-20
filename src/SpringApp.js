import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AddEmployee from "./AddEmployee";
import Table from "./Table"
class SpringApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={AddEmployee} />
                </Switch>
            </Router>
        );
    }
}

function hello() {
    return (
        <div>How are you?</div>
    )
}

export default SpringApp;
