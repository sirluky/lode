/**
 *
 * @param {*} arr pole na ktere chcete umistit objekt [{type: "blank", id:"0"}], bude nahrazeno na danych pozicich {type:"lod", id: -mu bude prideleno podle zadanych parametru}
 * @param {*} size sirka pole
 * @param {*} model 2d model lodi: [[0,0,0],[0,1,0],[0,1,0]]
 * @param {*} id id lodi 0 => neni lod
 * @param {*} pos 1d pozice pro umisteni lodi
 * @param {*} rotation rotace pole 0 - nic, 1 - 90deg, 2 - 180deg, 3 - 360deg
 */
export default function placeShip(
  arr,
  size = 10,
  model,
  id,
  pos,
  rotation = 0
) {
  model.forEach((row, ty) =>
    row.forEach((modelcell, tx) => {
      const last = arr[ty * size + pos + tx];
      if (modelcell !== 0) arr[ty * size + pos + tx] = { id, type: "lod" };
    })
  );
  return arr;
}
