import React, { Component } from "react";
import "./controlpanel.scss";
import { connect } from "react-redux";
import { playerReady } from "../actions/gameActions";

class ControlPanel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <div className="wrapper">
          {console.log(this.props)}
          <div className="mytime time">{this.props.mynick}</div>
          <div className="exit time" onClick={e => this.props.playerReady()}>
            Ukončit
          </div>
          <div className="opponentTime time">{this.props.ennick}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mynick: state.game.nick,
  ennick: state.game.enemynick
});
export default connect(
  mapStateToProps,
  { playerReady }
)(ControlPanel);
