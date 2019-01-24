import React, { Component } from "react";
import "./myboard.scss";
import { connect } from "react-redux";
class MyBoard extends Component {
  render() {
    return (
      <div className="board myboard selectMode">
        {console.log(this.props)}

        {this.props.board.map((e, index) => (
          <div
            className={"cell " + e.type}
            key={index}
            id={e.id}
            index={index}
            onClick={e => {
              console.log(
                e.target.getAttribute("index"),
                e.target.getAttribute("id")
              );
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
