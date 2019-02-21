import { CHANGE_NICK } from "./types";

export default function changeNick(nick) {
  return async function(dispatch) {
    dispatch({
      type: CHANGE_NICK,
      nick
    });
  };
}
