import { HIT } from "./types";

export default function Hit(hitdata) {
  return async function(dispatch) {
    dispatch({
      type: HIT,
      position: hitdata.pos,
      shiphit: hitdata.shiphit
    });
  };
}
