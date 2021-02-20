import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { MenuItem, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyTest = () => {
    const style = {
        textAlign: 'right',
    };
    return <div style={style}>Welcome to the test</div>
}

export default MyTest;

