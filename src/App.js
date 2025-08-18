import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
