import {} from "../actions/types";
import { BlankBoard, placeShip } from "../functions/functions";
import { ShipTypes } from "../assets/index";
//statuses
function initial() {
  let blank = BlankBoard();
  blank = placeShip(blank, 10, ShipTypes.medium, "5", 41);
  return placeShip(blank, 10, ShipTypes.small, "5", 7);
}
const initialState = {
  myboard: {
    board: initial(),
    ships: [
      {
        type: "small",
        pos: false,
        posShape: [17, 27],
        shape: ShipTypes.small,
        rotation: 0,
        id: 0
      }
    ]
  }
};

export default function(state = initialState, action) {
  // console.log("reducer running")
  switch (action.type) {
    default:
      return state;
  }
}
