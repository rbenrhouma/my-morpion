import React from "react";
import Case from "./Case";

class Winner extends React.Component {
  render = () => {
    const { winnerName } = this.props;
    return (
      <div>
        <p1 className="winnerLabel">{winnerName != null ? (winnerName === "X" ? "The winner is player 1" : "The winner is player 2") : ""} </p1>
      </div>
    );
  };
}

export default Winner;
