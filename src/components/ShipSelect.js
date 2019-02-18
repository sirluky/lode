import React, { Component } from "react";
// import lodM from "../assets/images/lod-m.svg";
import { connect } from "react-redux";
import { ShipTypes } from "../assets/index";
import { selectBoat } from "../actions/gameActions";
// import rotate from "../functions/rotategrid";
import "./shipselect.scss";

class ShipSelect extends Component {
  componentDidMount = () => {
    console.log(this.props.ships);
  };
  render() {
    return (
      <div className="shipSelect">
        <h1>Nabídka lodí</h1>
        <div className="nabidka">
          {this.props.ships.offers.map(boat => (
            <div
              className={
                "lod " +
                (this.props.ships.selected === boat.type ? "selected" : "") +
                (boat.remaining > 0 ? "" : " soldOut")
              }
              key={boat.type}
              datakey={boat.type}
            >
              <img
                draggable="false"
                src={ShipTypes[boat.type].img}
                onClick={this.props.selectBoat}
                alt={boat.type}
                style={{
                  transform: `rotate(${(this.props.ships.rotation - 1) *
                    90}deg)`
                }}
              />
              <i
                alt={boat.type}
                onClick={this.props.selectBoat}
                style={{
                  // position: "absolute",

                  height: 50,
                  width: 0,
                  margin: 0,
                  transform: "rotate(120deg)",
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                  paddingTop: -30,
                  zIndex: 2,
                  fontSize: 80,
                  color: "rgba(255,255,255,0.5)",
                  transform: "translate(-89px,-20px)"
                }}
                className="fas fa-sync-alt rotate"
              />

              <p>{boat.remaining} kusu</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ships: state.game.ships
});
export default connect(
  mapStateToProps,
  { selectBoat }
)(ShipSelect);
