import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Person extends React.Component {
   // componentWillMount() {
   //     this.props.history.push("/home/in");
   // };

    render() {
        return (
            <div className = "person" >
            I am Alex
            <div>
            <Link to = "/">Go Home</Link>
            </div>
           </div>
    );
    }
}
export default Person;
