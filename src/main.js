import React, { Component } from "react";
import "./App.css";
import MyBoard from "./components/MyBoard";
import Visualization from "./components/Visualization";
import ControlPanel from "./components/ControlPanel";
import ShipSelect from "./components/ShipSelect";
import { changeStatus } from "./actions/gameActions";
import Lobby from "./components/lobby";
import { connect } from "react-redux";
// import { placeBoat } from "../actions/gameActions";
import { on, emit } from "./functions/socket";
import {
  CHANGE_STATUS,
  GAME_PLACEMENT_STARTS,
  JOIN_GAME
} from "./actions/types";
import Boards from "./ingame-components/boards";
class App extends Component {
  componentDidMount = () => {
    // console.log(this.props);
    on(CHANGE_STATUS, data => {
      this.props.changeStatus("ingame", data);
    });
    on(GAME_PLACEMENT_STARTS, data => {
      this.props.changeStatus("placing", data);
      // alert("placement starts");
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Visualization />
          <ControlPanel />
          {this.props.status === "lobby" ? (
            <Lobby />
          ) : this.props.status === "placing" ||
            this.props.status === "waiting" ? (
            <div className="grid">
              <MyBoard />
              <ShipSelect />
            </div>
          ) : (
            <Boards />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  status: state.game.status
});
export default connect(
  mapStateToProps,
  { changeStatus }
)(App);
