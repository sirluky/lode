// import { rotateGrid } from "../functions/functions";

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
export default function placeShip(arr, size = 10, ship) {
  console.log(ship);
  // let toDelete = [];
  let success = false;
  console.log(ship.pos);
  if (ship.pos % 10 > 0 && ship.pos % 10 < 9) {
    success = true;
    // if (ship.prev.pos !== null) {
    //   let prevship = rotateGrid(ship.dmodel, ship.prev.rotation);
    //   prevship.forEach((row, oy) =>
    //     row.forEach((cell, ox) => {
    //       if (cell === 1) {
    //         let cellPos = ship.prev.pos + oy * size + ox - 11;
    //         // const arrcell = arr[cellPos];
    //         // if (arrcell.id == ship.id) {
    //         toDelete.push(cellPos);
    //         // }
    //       }
    //     })
    //   );
    // }

    ship.cmodel.forEach((row, ty) =>
      row.forEach((modelcell, tx) => {
        if (modelcell !== 0) {
          let cpos = ty * size + ship.pos + tx;
          cpos -= 11;

          // let toSplice = null;

          // toDelete.forEach((e, index) => {
          //   if (e === cpos) {
          //     toSplice = index;
          //   }
          // });

          // if (toSplice !== null) {
          //   toDelete.splice(toSplice, 1);
          // }
          arr[cpos] = { id: ship.id, type: "lod" };
        }
      })
    );
    // toDelete.forEach(index => {
    //   arr[index] = { id: 0, type: "blank" };
    // });
    // const last = arr[ty * size + ship.pos + tx];
  }
  return arr;
}
