import React, { Component } from "react";
import "./controlpanel.scss";
import { connect } from "react-redux";
import { playerReady, changeStatus } from "../actions/gameActions";

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="wrapper">
          {console.log(this.props)}
          <div className="mytime time">{this.props.mynick}</div>
          <div
            className="exit time"
            onClick={e => {
              this.props.playerReady();
              this.props.changeStatus("waiting");
            }}
            style={{
              visibility: this.props.status !== "ingame" ? "visible" : "hidden"
            }}
          >
            {this.props.status === "lobby" ? "Spustit hru" : "Připraven"}
          </div>
          <div className="opponentTime time">{this.props.ennick}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mynick: state.game.nick,
  ennick: state.game.enemynick,
  status: state.game.status
});
export default connect(
  mapStateToProps,
  { playerReady, changeStatus }
)(ControlPanel);
