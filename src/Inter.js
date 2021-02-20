import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';

class Inter extends React.Component {
    constructor(props) {
        super(props);
        this.value = 'John Doe';
        this.state = {
            clicked: false,
            color: "white",
            num: 0,
            text: 'I am on the very top',
            array: [],
            person: false,
        };
        this.Welcome = this.Welcome.bind(this);
        this.changeToRed = this.changeToRed.bind(this);
    }

    componentWillMount() {
        this.setState({
            num: 10,
        })
    }

     Welcome (props) {
        if(this.state.clicked)
            return <h10 style={props.style}>Hello, {props.name}</h10>;
         return <h10>Hello, stranger!</h10>;
     }

    onAddBtnClick() {
        this.setState({
            clicked: !this.state.clicked,
            text: this.state.text + " me",
            array: this.state.array.concat([5]),
            num: this.state.num + 1,
        });
    }

    nameHandler = (event) => {
        this.setState({
             text: event.target.value,
                      });
   }

    decrement () {
        this.setState({
            num: this.state.num - 1,
        })
    }

    changeToRed() {
        this.setState({
           color: "red",
        })
    }

    changeToYellow() {
        this.setState({
            color: "yellow",
        })
    }

    handlePerson() {
        this.props.history.push("/");
    }

    render() {
        const str = this.state.text;
        const style = {
            backgroundColor: 'green',
            border: '3px dotted red',
            cursor: 'pointer',
        };

        const styles = {
            color: this.state.color,
        }

        if(this.state.person) {
            return (
                <Router>
                <div>
                <Redirect push to="/person" />
                <Route path='/person' component={Person} />
            </div>
            </Router>
        );
        }

        return (
            <div className="App">
            <header className="App-header">
            <new>
            {this.state.text}
            </new>
            <input type="text" onChange={this.nameHandler} placeholder ="Search...">
            </input>
             <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
            >
            Learn React
        </a>
        <this.Welcome style={style} name="Sasha" />
            <n>{this.state.num}</n>
        <c>
        <button color="primary" onClick={() => this.onAddBtnClick()}>Increment</button>{' '}
        <button color="primary" onClick={() => this.decrement()}>Decrement</button>{' '}
        <button color="primary" onClick={this.changeToRed}>Change to red</button>{' '}
        <button color="primary" onClick={() => this.changeToYellow()}>Change to yellow</button>{' '}
        <button color="primary" onClick={() => this.handlePerson()}>Go to Person</button>{' '}
        </c>
        <a className='App-link'
           href="https://pressball.by"
           target="_blank" rel="noopener noreferrer">I am awesome</a>
        <textarea onChange={(event) => this.handleOnChange(event)}>
        {this.state.text}
        </textarea>
        <div style={styles}>Color changer</div>
        </header>
        </div>
    );
    }
}


export default Inter;
