import { PLACE_BOAT } from "./types";

export default function addShip(pos) {
  return function(dispatch) {
    console.log(pos);
    dispatch({
      type: PLACE_BOAT,
      pos
    });
  };
}
