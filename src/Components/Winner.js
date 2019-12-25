import React from "react";
import Case from "./Case";

class Winner extends React.Component {
  render = () => {
    const { winnerName } = this.props;
    let clName = "";
    winnerName !== "X" ? (clName = "winnerLabelRed") : (clName = "winnerLabelBlue");
    console.log(winnerName);
    return (
      <div>
        <p1 className={clName}>{winnerName != null ? (winnerName === "X" ? "The winner is player 1" : "The winner is player 2") : ""} </p1>
      </div>
    );
  };
}

export default Winner;
