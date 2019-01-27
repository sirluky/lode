import React, { Component } from "react";
import lodM from "../assets/images/lod-m.svg";
import { connect } from "react-redux";
import { ShipTypes } from "../assets/index";
import { selectBoat } from "../actions/gameActions";
import rotate from "../functions/rotategrid";
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
                (this.props.ships.selected === boat.type ? "selected" : "")
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
