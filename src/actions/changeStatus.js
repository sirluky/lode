import { CHANGE_STATUS, JOIN_GAME } from "./types";
import { emit } from "../functions/socket";
export default function changestatus(status = "lobby", data) {
  return function(dispatch) {
    // console.log(pos);
    console.log(data);
    if (status === CHANGE_STATUS) {
      emit(JOIN_GAME, { nick: data.nick });
    }

    dispatch({
      type: CHANGE_STATUS,
      status: status,
      data
    });
  };
}
