import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { MenuItem, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const style = {
        textAlign: 'center',
    };
    return <div style={style}>Welcome home</div>
}

const MyTest = () => {
    const style = {
        textAlign: 'right',
    };
    return <div style={style}>Welcome to the test</div>
}

const Hello = () => {
    return <div>Welcome home, buddy!</div>
}

const About = () => {
    return  (
        <div>
          <button>
            <Link to='http://www.pressball.by'>Navigate</Link>
          </button>
          <div>Welcome about</div>
       </div>
   );
}


class Test extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            loggedIn: false,
        };
        this.handle = this.handle.bind(this);
    }

    handle() {
        this.props.history.push('/test');
 //       this.setState({
 //           loggedIn: !this.state.loggedIn,
 //       })
    }

    handleClick() {
        this.setState({
            loggedIn: !this.state.loggedIn,
        })
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render () {
        if(this.state.loggedIn)
        return (
        <Router>
            <div>
            <Redirect push to="/hello"/>
            <Route path="/hello" component={Hello}/>
            </div>
        </Router>
    );
        return (
            <Fragment>
            <LogMan loggedIn={this.state.loggedIn} onClick={() => this.handleClick()} />
            <button onClick={this.handle}>Route</button>
            <Router>
            <Fragment>
            <ul>
            <Link to='/' >Go home</Link>
            </ul>
        <ul>
        <Link to='/about' >Go to about</Link>
        </ul>
        </Fragment>
        </Router>

        <ButtonDropdown className="menu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
        <DropdownMenu right>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem href="https://www.nhl.com">Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>
        </Fragment>
    );
    }
}

function LogIn(props) {
    return (
        <div>
        <div>Welcome user!</div>
         <button onClick={props.onClick}>Log out</button>
        </div>
);
}

function LogOut(props) {
    return (
        <div>
        <div>Please log in</div>
         <button onClick={props.onClick}>Log in</button>
       </div>
);
}

function LogMan(props) {
    if(props.loggedIn)
        return (
           <LogIn onClick={props.onClick} />
        );
        return (
            <LogOut onClick={props.onClick} />
       );
    }
export default Test;


