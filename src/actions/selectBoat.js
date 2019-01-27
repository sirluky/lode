import { SELECT_BOAT } from "./types";

export default function SelectBoat(element) {
  return function(dispatch) {
    const typ = element.target.getAttribute("alt");

    console.log(typ);
    dispatch({
      type: SELECT_BOAT,
      payload: { type: typ }
    });
  };
}
