import { HIT } from "./types";

export default function playerReady(element) {
  return async function(dispatch) {
    await setTimeout(() => 1 + 1, 500);
    dispatch({
      type: HIT,
      position: element,
      hit: true
    });
  };
}
