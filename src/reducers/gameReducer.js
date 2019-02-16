import {
  CHANGE_STATUS,
  PLACE_BOAT,
  SELECT_BOAT,
  PLAYER_READY
} from "../actions/types";
import { BlankBoard } from "../functions/functions";
import { Ship } from "../functions/functions";
// import io from "socket.io-client";

import { emit } from "../functions/socket";
//statuses

function initial() {
  // let blank = BlankBoard();
  // let myship = new Ship("medium", 51, "8");
  // let myship2 = new Ship("small", 47, "8");
  // myship2.setRotation(3);
  // blank = placeShip(blank, 10, myship2);
  return BlankBoard();
}
const initialState = {
  board: initial(),
  ships: {
    selected: "none",
    rotation: 1,
    offers: [{ type: "small", remaining: 2 }, { type: "medium", remaining: 3 }],
    placed: []
  },
  status: "placing",
  cid: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAYER_READY:
      // console.log(state.ships.placed);
      emit(PLAYER_READY, { ships: state.ships.placed });

      return state;
    case PLACE_BOAT:
      // console.log(action);
      const copied = [...state.board];
      let nPlaced;
      let updated;

      // console.log(state.ships.rotation);
      let boat;
      if (state.ships.selected !== "none") {
        boat = new Ship(state.ships.selected, action.pos, state.cid);
        boat.setRotation(state.ships.rotation);
        nPlaced = [...state.ships.placed, boat];
        updated = boat.setPos(action.pos, copied);
        // console.log("new", updated);
      } else {
        nPlaced = [...state.ships.placed];
        updated = copied;
      }
      return {
        ...state,
        cid: state.cid + 1,
        board: updated,
        ships: {
          ...state.ships,
          placed: nPlaced
        }
      };
    case SELECT_BOAT:
      let rotation = state.ships.rotation;
      if (state.ships.selected === action.payload.type)
        rotation = (rotation % 4) + 1;
      return {
        ...state,
        ships: {
          ...state.ships,
          selected: action.payload.type,
          rotation: rotation
        }
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return {
        ...state
      };
  }
}
