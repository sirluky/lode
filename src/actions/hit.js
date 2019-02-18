import { HIT } from "./types";

export default function playerReady(element) {
  return function(dispatch) {
    dispatch({
      type: HIT,
      position: element,
      hit: true
    });
  };
}
