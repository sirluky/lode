import {
  CHANGE_STATUS,
  PLACE_BOAT,
  SELECT_BOAT,
  PLAYER_READY,
  SHOOT,
  HIT
} from "../actions/types";
import { BlankBoard } from "../functions/functions";
import { Ship } from "../functions/functions";
// import io from "socket.io-client";
import _ from "lodash";
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
  enemyboard: initial(),
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
    case SHOOT:
      const enboard = state.enemyboard;
      if (action.hit) enboard[action.position].type = "shiphit";
      else {
        enboard[action.position].type = "missed";
      }
      return {
        ...state,
        enemyboard: [...enboard]
      };
    case HIT:
      const board = state.board;
      if (action.hit) board[action.position].type = "shiphit";
      else {
        board[action.position].type = "missed";
      }

      return {
        ...state,
        board: [...board]
      };
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
        // console.log(state.ships.offers[0].type, state.ships.selected);
        const selectedship = state.ships.selected;
        let shipindex = _.findIndex(
          state.ships.offers,
          ship => ship.type === selectedship
        );
        // alert(shipindex);
        let theship = state.ships.offers[shipindex];
        if (theship.remaining > 0) {
          boat = new Ship(state.ships.selected, action.pos, state.cid);
          boat.setRotation(state.ships.rotation);
          nPlaced = [...state.ships.placed, boat];
          updated = boat.setPos(action.pos, copied);
          // console.log("new", updated);

          state.ships.offers[shipindex].remaining = theship.remaining - 1;
          return {
            ...state,
            cid: state.cid + 1,
            board: updated,
            ships: {
              ...state.ships,
              offers: [...state.ships.offers],
              placed: nPlaced
            }
          };
        }
      } else {
        nPlaced = [...state.ships.placed];
        updated = copied;
        return state;
      }
      return state;

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
      let enemyboard = action.enemydata.enemyboard;
      return {
        ...state,
        enemyboard,
        status: action.status
      };

    default:
      return {
        ...state
      };
  }
}
