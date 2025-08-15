import React from "react";
import "./App.css";

// import MyBoard from "./components/MyBoard";
// import Visualization from "./components/Visualization";
// import ControlPanel from "./components/ControlPanel";
import { Provider } from "react-redux";
import store from "./store";
// import ShipSelect from "./components/ShipSelect";
import Main from "./main.jsx";
// import { connect } from "react-redux";
// import { placeBoat } from "../actions/gameActions";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
