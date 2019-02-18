import React, { Component } from "react";
import Mine from "./mine";
import Enemy from "./enemy";

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <div className="battleboard grid">
        <Mine />
        <Enemy />
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   status: state.game.status
// });
export default App;
//   // mapStateToProps,
//   // { changeStatus }
// )(App);
