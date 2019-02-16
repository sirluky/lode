import { PLAYER_READY } from "./types";

export default function playerReady(element) {
  return function(dispatch) {
    dispatch({
      type: PLAYER_READY,
      payload: { ready: true }
    });
  };
}
