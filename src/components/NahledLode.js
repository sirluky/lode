import React from "react";
import Ship from "../functions/ship";
import placeShip from "../functions/placeShip";
import blankboard from "../functions/blankboard";
export default function NahledLode({
  type,
  pos,
  rotation,
  setLoc,
  previewOn,
  nahledOn,
  previewStatus,
  cellClicked
}) {
  console.log(type);
  console.log(rotation);
  let pomlod = new Ship(type, 10);
  let centeredpos = pos;
  pomlod.setRotation(rotation);
  let shipbody = placeShip(blankboard(5), 5, pomlod);
  // console.log(shipbody);

  return (
    <div>
      <div
        style={{
          display: previewOn || nahledOn ? "block" : "none",
          position: "absolute"
        }}
      >
        <div
          className="nahled"
          style={{
            width: 168,
            left: 33.5 * (centeredpos % 10) - 67,
            top: 33.5 * (Math.floor(centeredpos / 10) - 2)
          }}
        >
          {shipbody.map((e, index) => (
            <div
              key={index}
              index={index}
              className={"cell " + e.type}
              onMouseEnter={e => {
                previewStatus(true);
                let index = parseInt(e.target.getAttribute("index"));
                console.log(
                  parseInt(centeredpos) +
                    (index % 5) +
                    Math.floor(index / 5) * 10 -
                    24
                );

                setLoc(
                  parseInt(centeredpos) +
                    (index % 5) +
                    Math.floor(index / 5) * 10 -
                    22
                );
              }}
              onClick={e => {
                previewStatus(true);
                let index = parseInt(e.target.getAttribute("index"));
                cellClicked(
                  parseInt(centeredpos) +
                    (index % 5) +
                    Math.floor(index / 5) * 10 -
                    20
                );
              }}
              // onMouseLeave={e => {
              //   previewStatus(false);
              // }}
            >
               
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
