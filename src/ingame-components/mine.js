import React, { Component } from "react";
import "./boards.scss";
import { connect } from "react-redux";
import { hit } from "../actions/gameActions";
import { on } from "../functions/socket";
import { HIT } from "../actions/types";

class BattleBoard extends Component {
  componentDidMount = () => {
    on(HIT, pos => {
      this.props.hit(pos);
    });
  };

  render() {
    return (
      <div className={`board mine ${this.props.onturn ? "" : "onturn"}`}>
        {this.props.board.map((e, index) => (
          <div className={"cell " + e.type} key={index}>
             
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.board,
  onturn: state.game.onturn
});

export default connect(
  mapStateToProps,
  { hit }
)(BattleBoard);
