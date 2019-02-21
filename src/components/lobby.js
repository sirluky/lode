import React, { Component } from "react";
import { connect } from "react-redux";
import { changeNick } from "../actions/gameActions";
import "./lobby.scss";
export class lobby extends Component {
  render() {
    return (
      <div className="lobby">
        <label htmlFor="nickname">Zadejte váš nick</label>
        <br />
        <input
          id="nickname"
          maxLength="20"
          type="text"
          placeholder="Guest"
          value={this.props.nick}
          onChange={e => this.props.changeNick(e.target.value)}
        />
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nick: state.nick,
  message: state.message
});

export default connect(
  mapStateToProps,
  { changeNick }
)(lobby);
