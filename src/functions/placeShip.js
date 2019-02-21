// import { rotateGrid } from "../functions/functions";
import cutBoard from "./cutBoard";
/**
 *
 * @param {*} arr pole na ktere chcete umistit objekt [{type: "blank", id:"0"}], bude nahrazeno na danych pozicich {type:"lod", id: -mu bude prideleno podle zadanych parametru}
 * @param {*} size sirka pole
 * @param {*} model 2d model lodi: [[0,0,0],[0,1,0],[0,1,0]]
 * @param {*} id id lodi 0 => neni lod
 * @param {*} pos 1d pozice pro umisteni lodi
 * @param {*} rotation rotace pole 1 - nic, 2 - 90deg, 3 - 180deg, 4 - 270deg
 *
 */
export default function placeShip(arr, size = 10, ship, placeable = false) {
  if (placeable === true) {
    ship.cmodel.forEach((row, ty) =>
      row.forEach((modelcell, tx) => {
        if (modelcell !== 0) {
          let cpos = ty * size + ship.pos + tx;
          cpos -= size - 1;
          console.log(cpos + size);

          if (
            checkAround(
              [
                arr[cpos + 1],
                arr[cpos - 1],
                arr[cpos - size],
                arr[cpos + size]
              ],
              arr[cpos]
            )
          )
            placeable = false;
        }
      })
    );

    return placeable;
  }
  ship.cmodel.forEach((row, ty) =>
    row.forEach((modelcell, tx) => {
      if (modelcell !== 0) {
        let cpos = ty * size + ship.pos + tx;
        cpos -= size - 1;
        arr[cpos] = { id: ship.id, type: "lod" };
      }
    })
  );
  // toDelete.forEach(index => {
  //   arr[index] = { id: 0, type: "blank" };
  // });
  // const last = arr[ty * size + ship.pos + tx];

  return arr;
}
export function checkAround(checkplaces, currentplace) {
  // console.log(checkplaces, "check");

  for (let i = 0; i < checkplaces.length; i++) {
    // if (checkplaces[i] === undefined) return false;

    if (checkplaces[i].type === "lod") {
      console.log(checkplaces[i], "z", i);
      return true;
    }
  }
  if (currentplace.type === "nic") {
    return true;
  }
}
