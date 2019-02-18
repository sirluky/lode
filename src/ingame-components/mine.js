import React, { Component } from "react";
import "./boards.scss";
import { connect } from "react-redux";
// import { emit, on } from "../functions/socket";
import { hit } from "../actions/gameActions";

class BattleBoard extends Component {
  componentDidMount = () => {};

  // cellClicked(e) {
  // }
  // componentReady = () => {
  //   console.log(this.props);
  //   // emit();

  // };

  render() {
    return (
      <div className="board mine">
        {this.props.board.map((e, index) => (
          <div className={"cell " + e.type} key={index}>
             
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.board
});

export default connect(mapStateToProps)(BattleBoard);
