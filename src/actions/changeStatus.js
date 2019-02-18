import { CHANGE_STATUS } from "./types";

export default function changestatus(status = "lobby", data) {
  return function(dispatch) {
    // console.log(pos);
    dispatch({
      type: CHANGE_STATUS,
      status: status,
      enemydata: data
    });
  };
}
