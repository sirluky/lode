import React, { Component } from "react";
import "./controlpanel.scss";
import { connect } from "react-redux";
import { playerReady, changeStatus } from "../actions/gameActions";
import { JOIN_GAME, CHANGE_STATUS } from "../actions/types";
class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="wrapper">
          {/* {this.props.changeStatus(CHANGE_STATUS, {
            nick: this.props.mynick
          })} */}
          <div className="mytime time">{this.props.mynick}</div>
          <div
            className="exit time"
            onClick={e => {
              this.props.playerReady();
              if (e.currentTarget.innerText === "Spustit hru")
                this.props.changeStatus(CHANGE_STATUS, {
                  nick: this.props.mynick
                });
              else this.props.changeStatus("waiting");
            }}
            style={{
              visibility: this.props.status !== "ingame" ? "visible" : "hidden"
            }}
          >
            {this.props.status === "lobby"
              ? "Spustit hru"
              : this.props.status === "waiting"
              ? "Čekání na soupeře"
              : "Připraven"}
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
