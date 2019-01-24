import React, { Component } from "react";
import lodM from "../assets/images/lod-m.svg";
export default class ShipSelect extends Component {
  render() {
    return (
      <div className="shipSelect">
        <h1>Nabídka lodí</h1>
        <div className="nabidka">
          <div className="lod disabled">
            <img src={lodM} alt="" />
            <p>{"x"} kusů</p>
          </div>
          <div className="lod">
            <img src={lodM} alt="" />
            <p>{"x"} kusů</p>
          </div>
          <div className="lod">
            <img src={lodM} alt="" />
            <p>{"x"} kusů</p>
          </div>
          <div className="lod">
            <img src={lodM} alt="" />
            <p>{"x"} kusů</p>
          </div>
        </div>
      </div>
    );
  }
}
