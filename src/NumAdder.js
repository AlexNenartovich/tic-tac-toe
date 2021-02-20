import React from "react";
import PostForm from "./PostForm";
import Posts from "./Posts";

class NumAdder extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            num1: "",
            num2: "",
            result: "",
            input: true
        }
    }

    handleNum1 = async (e) => {
        this.setState({
            num1: e.target.value
        })
    }

    handleNum2 = async (e) => {
        this.setState({
            num2: e.target.value
        })
    }

    calculate = () => {
        var num1 = parseInt(this.state.num1, 10);
        var num2 = parseInt(this.state.num2, 10);
        if(isNaN(num1) || isNaN(num2))
            this.setState({
                num1: "",
                num2: "",
                result: "",
                input: false
            })
        else {
            let sum = num1 + num2;
            this.setState({
                result: sum,
                input: true
            })
        }
    }

    render() {
        if(this.state.input) {
            return (
                <div className="cont">
                    <h2 className="header">Please enter the numbers to add below:</h2>
                    <input type='text' className="num1" value={this.state.num1}
                            onChange={(e) => this.handleNum1(e)}></input>
                    +
                    <input type="text" value={this.state.num2} className="num2" onChange={this.handleNum2}></input>
                    =
                    <input type="text" className="num3" value={this.state.result}></input>
                    <button onClick={this.calculate}>Add</button>
                    <PostForm />
                    <Posts />
                </div>
            )
        }
        else {
            return (
                <div className="cont">
                    <h2>Please enter the numbers to add below:</h2>
                    <h2 className="error">Invalid input. Please try again</h2>
                    <input type='text' className="num1" value={this.state.num1}
                            onChange={(e) => this.handleNum1(e)}></input>
                    +
                    <input type="text" className="num2" onChange={this.handleNum2}></input>
                    =
                    <input type="text" className="num3" value={this.state.result}></input>
                    <button onClick={this.calculate}>Add</button>
                </div>
            )
        }
    }
}

export default NumAdder;
