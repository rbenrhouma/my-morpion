import React from "react";
import "./App.css";
import Case from "./Components/Case";
import Winner from "./Components/Winner";

class App extends React.Component {
  G1 = "X";
  G2 = "Y";
  // G1 = "player 1";
  // G2 = "player 2";

  state = {
    case11: null,
    case12: null,
    case13: null,
    case21: null,
    case22: null,
    case23: null,
    case31: null,
    case32: null,
    case33: null,
    winner: null,
    winLine: [],
    xIsNext: true
  };

  calculateWinner() {
    const lines = [
      // horizontal
      [this.state.case11, this.state.case12, this.state.case13],
      [this.state.case21, this.state.case22, this.state.case23],
      [this.state.case31, this.state.case32, this.state.case33],
      // vertical
      [this.state.case11, this.state.case21, this.state.case31],
      [this.state.case12, this.state.case22, this.state.case32],
      [this.state.case13, this.state.case23, this.state.case33],
      // diagonal
      [this.state.case11, this.state.case22, this.state.case33],
      [this.state.case13, this.state.case22, this.state.case31]
    ];

    const linesWin = [
      // horizontal
      ["case11", "case12", "case13"],
      ["case21", "case22", "case23"],
      ["case31", "case32", "case33"],
      // vertical
      ["case11", "case21", "case31"],
      ["case12", "case22", "case32"],
      ["case13", "case23", "case33"],
      // diagonal
      ["case11", "case22", "case33"],
      ["case13", "case22", "case31"]
    ];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const sameValueOnLine = line[0] === line[1] && line[1] === line[2];
      // same values on the line and not empty (null is empty)
      if (sameValueOnLine && line[0] !== null) {
        // winner
        this.setState({ winner: line[0], winLine: linesWin[i] });
        return;
      }
    }
    this.setState({ winner: null, winLine: [] });
    return;
  }

  render = () => {
    return (
      <div className="App">
        <div className="div-line">
          <Case
            position={this.state.case11}
            id={"case11"}
            onClick={async () => {
              if (this.state.case11 === null && this.state.winner === null) {
                await this.setState({ case11: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
                await this.calculateWinner();
              }
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case12}
            id={"case12"}
            onClick={async () => {
              if (this.state.case12 === null && this.state.winner === null) await this.setState({ case12: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case13}
            id={"case13"}
            onClick={async () => {
              if (this.state.case13 === null && this.state.winner === null) await this.setState({ case13: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
        </div>
        <div className="div-line">
          <Case
            position={this.state.case21}
            id={"case21"}
            onClick={async () => {
              if (this.state.case21 === null && this.state.winner === null) await this.setState({ case21: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case22}
            id={"case22"}
            onClick={async () => {
              if (this.state.case22 === null && this.state.winner === null) await this.setState({ case22: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case23}
            id={"case23"}
            onClick={async () => {
              if (this.state.case23 === null && this.state.winner === null) await this.setState({ case23: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
        </div>
        <div className="div-line">
          <Case
            position={this.state.case31}
            id={"case31"}
            onClick={async () => {
              if (this.state.case31 === null && this.state.winner === null) await this.setState({ case31: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case32}
            id={"case32"}
            onClick={async () => {
              if (this.state.case32 === null && this.state.winner === null) await this.setState({ case32: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
          <Case
            position={this.state.case33}
            id={"case33"}
            onClick={async () => {
              if (this.state.case33 === null && this.state.winner === null) await this.setState({ case33: this.state.xIsNext ? this.G1 : this.G2, xIsNext: !this.state.xIsNext });
              await this.calculateWinner();
            }}
            winnerName={this.state.winner}
            winLine={this.state.winLine}
          />
        </div>

        <div
          className="button"
          onClick={() => {
            this.setState({
              case11: null,
              case12: null,
              case13: null,
              case21: null,
              case22: null,
              case23: null,
              case31: null,
              case32: null,
              case33: null,
              winner: null,
              winLine: []
            });
          }}
        >
          Rejouer !
        </div>
        <Winner winnerName={this.state.winner} />
      </div>
    );
  };
}

export default App;
