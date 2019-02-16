import React, { Component } from "react";
import "./controlpanel.scss";
import { connect } from "react-redux";
import { playerReady } from "../actions/gameActions";

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="wrapper">
          <div className="mytime time">00:00</div>
          <div className="exit time" onClick={e => this.props.playerReady()}>
            Ukončit
          </div>
          <div className="opponentTime time">00:00</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { playerReady }
)(ControlPanel);
