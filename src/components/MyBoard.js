import React, { Component } from "react";
import "./myboard.scss";
import { connect } from "react-redux";
import { placeBoat } from "../actions/gameActions";
import NahledLode from "../components/NahledLode";
// import { emit, on } from "../functions/socket";

class MyBoard extends Component {
  state = {
    selectedPos: 15,
    previewOn: false,
    nahledOn: false
    // previewrunning: false
  };
  componentDidMount = () => {
    // console.log(this.props);
    // setTimeout(this.componentReady, 1000);
  };

  cellClicked = e => {
    if (typeof e === "number") {
      this.props.placeBoat(e - 4);
      // console.log(e);
    } else {
      if (e.target.getAttribute("type") === "blank")
        this.props.placeBoat(parseInt(e.target.getAttribute("index")));
    }
  };
  previewHere = e => {
    if (e.target.getAttribute("type") === "blank")
      this.setState({
        selectedPos: e.target.getAttribute("index"),
        previewOn: true
      });
  };
  fromPreview = pos => {
    this.setState({
      selectedPos: pos
      // previewOn: false
    });
  };
  previewStatus = val => {
    this.setState({ nahledOn: val });
  };

  // componentReady = () => {
  //   console.log(this.props);
  //   // emit();

  // };

  render() {
    return (
      <div
        className="board myboard selectMode"
        onMouseLeave={event => {
          this.setState({ previewOn: false });
        }}
      >
        <NahledLode
          previewOn={this.state.previewOn}
          pos={this.state.selectedPos}
          type={this.props.selected}
          rotation={this.props.rotation}
          setLoc={this.fromPreview}
          previewStatus={this.previewStatus}
          nahledOn={this.nahledOn}
          cellClicked={this.cellClicked}
          fullBoard={this.props.board}
        />
        {this.props.board.map((e, index) => (
          <div
            className={"cell " + e.type}
            key={index}
            id={e.id}
            type={e.type}
            index={index}
            onClick={this.cellClicked.bind(this)}
            onMouseEnter={e => this.previewHere(e)}
          >
             
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.game.board,
  selected: state.game.ships.selected,
  rotation: state.game.ships.rotation
});

export default connect(
  mapStateToProps,
  { placeBoat }
)(MyBoard);
