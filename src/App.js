import React, { Component } from "react";
import "./App.css";
import MyBoard from "./components/MyBoard";
import Visualization from "./components/Visualization";
import ControlPanel from "./components/ControlPanel";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <Visualization />
            <ControlPanel />
            <div className="grid">
              <MyBoard />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
