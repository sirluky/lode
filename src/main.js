import React, { Component } from "react";
import "./App.css";
import MyBoard from "./components/MyBoard";
import Visualization from "./components/Visualization";
import ControlPanel from "./components/ControlPanel";
import ShipSelect from "./components/ShipSelect";
import { changeStatus } from "./actions/gameActions";

import { connect } from "react-redux";
// import { placeBoat } from "../actions/gameActions";
import { on } from "./functions/socket";
import { CHANGE_STATUS } from "./actions/types";
import Boards from "./ingame-components/boards";
class App extends Component {
  componentDidMount = () => {
    // console.log(this.props);
    on(CHANGE_STATUS, data => {
      this.props.changeStatus("ingame", data);
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Visualization />
          <ControlPanel />
          {this.props.status === "placing" ? (
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
