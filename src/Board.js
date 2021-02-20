import React from 'react'
import ReactDOM from 'react-dom'
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xTurn: true,
            squares: Array(9).fill(null),
            gameWon: false,
            winner: null,
            numClicked: 0
        }
    }

    checkWinner = () => {
        if(this.checkRow(0, "X") || this.checkRow(3, "X") || this.checkRow(6, "X")
            || this.checkCol(0, "X") || this.checkCol(1, "X") || this.checkCol(2, "X")
            || this.checkDiag("X")) {
            this.setState({
                gameWon: true,
                winner: "X"
            })
        }

        if(this.checkRow(0, "O") || this.checkRow(3, "O") || this.checkRow(6, "O")
            || this.checkCol(0, "O") || this.checkCol(1, "O") || this.checkCol(2, "O")
            || this.checkDiag("O")) {
            this.setState({
                gameWon: true,
                winner: "O"
            })
        }
    }

    checkRow = (num, letter) => {
        let ar = this.state.squares;
        if(ar[num] === letter && ar[num+1] === letter && ar[num+2] === letter)
            return true;
        return false;
    }

    checkCol = (num, letter) => {
        let ar = this.state.squares;
        if(ar[num] === letter && ar[num+3] === letter && ar[num+6] === letter)
            return true;
        return false;
    }

    checkDiag = (letter) => {
        let ar = this.state.squares;
        if((ar[0] === letter && ar[4] === letter && ar[8] === letter)
            || (ar[2] === letter && ar[4] === letter && ar[6] === letter))
            return true;
        return false;
    }

    handleClick = (index) => {
        if(this.state.squares[index] == null && !this.state.gameWon) {
            let sq = this.state.squares;
            sq[index] = this.state.xTurn ? "X" : "O";
            this.setState({
                numClicked: this.state.numClicked+1,
                squares: sq,
                xTurn: !this.state.xTurn,
            })
            this.checkWinner();
        }
    }

    playAgain = () => {
        this.setState({
            gameWon: false,
            squares: Array(9).fill(null),
            winner: null,
            xTurn: true,
            numClicked: 0
        })
    }

    render() {
        return (
            <div style={{marginLeft: 600, marginTop: 200}}>
                {this.state.xTurn ? (
                    <h2 style={{marginLeft: 25}}>X Turn</h2>
                ) : <h2 style={{marginLeft: 25}}>O Turn</h2>}
                <div>
                    <Square onClick={this.handleClick} index={0} number={this.state.squares[0]} />
                    <Square onClick={this.handleClick} index={1} number={this.state.squares[1]} />
                    <Square onClick={this.handleClick} index={2} number={this.state.squares[2]} />
                </div>
                <div>
                    <Square onClick={this.handleClick} index={3} number={this.state.squares[3]} />
                    <Square onClick={this.handleClick} index={4} number={this.state.squares[4]} />
                    <Square onClick={this.handleClick} index={5} number={this.state.squares[5]} />
                </div>
                <div>
                    <Square onClick={this.handleClick} index={6} number={this.state.squares[6]} />
                    <Square onClick={this.handleClick} index={7} number={this.state.squares[7]} />
                    <Square onClick={this.handleClick} index={8} number={this.state.squares[8]} />
                </div>
                {this.state.gameWon ? (
                    <div>
                        <h2>{this.state.winner} Won!</h2>
                        <button onClick={this.playAgain}>Play again</button>
                    </div>
                ) : <div></div>
                }
                {this.state.numClicked === 9 && !this.state.gameWon ? (
                    <div>
                        <h2>It's a Draw</h2>
                        <button onClick={this.playAgain}>Play again</button>
                    </div>
                ) : <div></div>
                }
            </div>
        )
    }
}

export default Board;
