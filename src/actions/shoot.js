import { SHOOT } from "./types";

export default function playerReady(element) {
  return function(dispatch) {
    dispatch({
      type: SHOOT,
      position: element,
      hit: true
    });
  };
}
