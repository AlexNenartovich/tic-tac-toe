import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class AddEmployee extends Component {
   // const classes = useStyles();
    constructor() {
        super();
        this.state = {
            name: "",
            gender : "",
            department: "",
            dob: "",
            date: new Date("01-01-1900")
        }
    }
 //   const [firstLoad, setLoad] = React.useState(true);
    /*
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("1998-04-02T21:11:54")
    );
    const [name, setName] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [gender, setGender] = React.useState("");

    const handleDateChange = date => setSelectedDate(date);
    const handleNameChange = event => setName(event.target.value);
    const handlDepartmentChange = event => setDepartment(event.target.value);
    const handleGenderChange = event => setGender(event.target.value);

    const [message, setMessage] = React.useState("Nothing saved in the session");
     */
    async sampleFunc() {
        const response = await fetch("http://localhost:3300/employee", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(this.state) // body data type must match "Content-Type" header
        });
        let body = await response.json();
        console.log(body.status + " " + body.name);
  //      setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleDepChange = (e) => {
        this.setState({
            department: e.target.value
        })
    }
    handleGenderChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    handleDobChange = (e) => {
        this.setState({
            dob: e.target.value
        })
    }
    handleSubmit = variables => {
        this.setState({
            date: new Date(this.state.dob)
        })
        this.sampleFunc();
    };

    render() {
        return (
            <form>
                <input type="text" placeholder="Name" onChange={this.handleNameChange}/><br></br>
                <input type="text" placeholder="Gender" onChange={this.handleGenderChange}/><br></br>
                <input type="text" placeholder="Department" onChange={this.handleDepChange}/>
                <input type="text" placeholder="Date of Birth" onChange={this.handleDobChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}
export default AddEmployee;
