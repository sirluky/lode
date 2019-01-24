import {} from "../actions/types";
import { BlankBoard, placeShip } from "../functions/functions";
import { ShipTypes } from "../assets/index";
//statuses
function initial() {
  let blank = BlankBoard();
  blank = placeShip(blank, 10, ShipTypes.medium, "2", 41);
  return placeShip(blank, 10, ShipTypes.small, "1", 7);
}
const initialState = {
  myboard: {
    board: initial(),
    ships: []
  }
};

export default function(state = initialState, action) {
  // console.log("reducer running")
  switch (action.type) {
    default:
      return state;
  }
}
