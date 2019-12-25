import React from "react";

class Case extends React.Component {
  render = () => {
    const { position, winnerName, id, winLine } = this.props;
    let css = " ";
    if (position === "X") css = " p1";
    if (position === "Y") css = " p2";
    if (winnerName !== null && position !== "X" && position !== "Y") css = " px  ";

    if (winnerName != null) {
      if (winnerName === "X" && winLine.indexOf(id) >= 0) {
        css = " p1-blink  ";
      }
      if (winnerName === "Y" && winLine.indexOf(id) >= 0) {
        css = " p2-blink  ";
      }
    }

    return (
      <>
        <span id={id} className={"Case " + css} onClick={this.props.onClick}></span>
      </>
    );
  };
}

export default Case;
