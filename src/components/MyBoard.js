import React, { Component } from "react";
import "./myboard.scss";
import { connect } from "react-redux";
import { placeBoat } from "../actions/gameActions";
class MyBoard extends Component {
  componentDidMount = () => {
    // console.log(this.props);
  };
  cellClicked(e) {
    this.props.placeBoat(parseInt(e.target.getAttribute("index")));
  }
  render() {
    return (
      <div className="board myboard selectMode">
        {this.props.board.map((e, index) => (
          <div
            className={"cell " + e.type}
            key={index}
            id={e.id}
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
  board: state.game.board
});

export default connect(
  mapStateToProps,
  { placeBoat }
)(MyBoard);
