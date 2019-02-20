import React, { Component } from "react";
import "./boards.scss";
import { connect } from "react-redux";
// import { emit, on } from "../functions/socket";
import { shoot } from "../actions/gameActions";
class BattleBoard extends Component {
  componentDidMount = () => {};

  cellClicked(e) {
    // console.log(e.target.getAttribute("shot"));

    if (this.props.onturn && e.target.getAttribute("shot"))
      this.props.shoot(parseInt(e.target.getAttribute("index")));
  }
  // componentReady = () => {
  //   console.log(this.props);
  //   // emit();

  // };

  render() {
    return (
      <div
        className={`board enemy ${
          this.props.onturn ? "attackMode onturn" : ""
        }`}
      >
        {this.props.board.map((e, index) => (
          <div
            className={"cell " + e.type}
            key={index}
            shot={e.type === "blank" ? "true" : "false"}
            index={index}
            onClick={this.cellClicked.bind(this)}
          >
             
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.enemyboard,
  onturn: state.game.onturn
});

export default connect(
  mapStateToProps,
  { shoot }
)(BattleBoard);
