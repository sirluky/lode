import React, { Component } from "react";
import "./myboard.scss";
import { connect } from "react-redux";
class MyBoard extends Component {
  render() {
    return (
      <div className="board myboard">
        {console.log(this.props)}

        {this.props.board.map((e, index) => (
          <div
            className={"cell " + e.type}
            key={index}
            datakey={index}
            onClick={e => {
              console.log(e.target.getAttribute("datakey"));
            }}
          >
             
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.myboard.board
});

export default connect(mapStateToProps)(MyBoard);
