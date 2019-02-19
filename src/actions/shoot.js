import { SHOOT } from "./types";
import { emit, onOnce } from "../functions/socket";
export default function shoot(pos) {
  return async function(dispatch) {
    emit(SHOOT, pos);
    let nothing = await onOnce(SHOOT);

    await dispatch({
      type: SHOOT,
      position: pos,
      hit: nothing
    });
  };
}
