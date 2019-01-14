import React, { Component } from "react";
import "./controlpanel.scss";
export default class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="wrapper">
          <div className="mytime time">00:00</div>
          <div className="exit time">Ukončit</div>
          <div className="opponentTime time">00:00</div>
        </div>
      </div>
    );
  }
}
