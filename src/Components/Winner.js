import React from "react";
import Case from "./Case";
import logo from "./LeReacteur.jpg";
class Winner extends React.Component {
  render = () => {
    const { winnerName } = this.props;
    let clName = "";
    winnerName !== "X" ? (clName = "winnerLabelRed") : (clName = "winnerLabelBlue");
    return (
      <div>
        <p1 className={clName}>{winnerName != null ? (winnerName === "X" ? "The winner is player 1" : "The winner is player 2") : ""} </p1>
        <img className="lgoReact" hidden={winnerName === null} src={logo} alt={"logo"} />
      </div>
    );
  };
}

export default Winner;
