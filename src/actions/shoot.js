import { SHOOT } from "./types";
import { socket, emit } from "../functions/socket";
export default function shoot(element) {
  return async function(dispatch) {
    emit("zpozdeni", "nic");
    let nothing = await ioOnce();

    await dispatch({
      type: SHOOT,
      position: element,
      hit: nothing
    });
  };
}

function ioOnce() {
  return new Promise(resolve => {
    socket.once("zpozdeni", function(data) {
      // console.log(data);
      resolve(data);
    });
  });
}
