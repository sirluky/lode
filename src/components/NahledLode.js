import React from "react";
import Ship from "../functions/ship";
import placeShip from "../functions/placeShip";
import blankboard from "../functions/blankboard";
import cutBoard from "../functions/cutBoard";

export default function NahledLode({
  type,
  pos,
  rotation,
  setLoc,
  previewOn,
  nahledOn,
  previewStatus,
  cellClicked,
  fullBoard
}) {
  console.log(type);
  console.log(rotation);
  let pomlod = new Ship(type, 10);
  let centeredpos = pos;
  const overPlaceholder = { id: "1234", type: "nic" };
  pomlod.setRotation(rotation);

  let overlayBoard = cutBoard(fullBoard, 10, pos, 5, overPlaceholder);

  let lzepolozit = placeShip(overlayBoard, 5, pomlod, true);
  // overlayBoard = placeShip(overlayBoard, 5, pomlod);

  overlayBoard = placeShip(blankboard(5), 5, pomlod);

  return (
    <div>
      <div
        style={{
          display: previewOn || nahledOn ? "block" : "none",
          position: "absolute"
        }}
      >
        <div
          className={"nahled " + (lzepolozit ? "placeable" : "")} // +
          style={{
            width: 168,
            height: 168,
            left: 33.5 * (pos % 10) - 67,
            top: 33.5 * (Math.floor(pos / 10) - 2)
          }}
        >
          {overlayBoard.map((e, index) => (
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
                    22
                );

                setLoc(
                  parseInt(centeredpos) +
                    (index % 5) +
                    Math.floor(index / 5) * 10 -
                    22
                );
              }}
              onClick={e => {
                if (lzepolozit) {
                  let index = parseInt(e.target.getAttribute("index"));
                  cellClicked(
                    parseInt(centeredpos) +
                      (index % 5) +
                      Math.floor(index / 5) * 10 -
                      20
                  );
                }
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
