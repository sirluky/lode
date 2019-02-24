import _ from "lodash";
/**
 * @param arr pole ze ktereho se bude vyrezavat
 * @param pos pozice (index)
 *
 */
export default function cutBoard(
  arr,
  dsize = 10,
  pos,
  csize = 5,
  placeholderval,
  mode = false
) {
  let pomtwod = [];
  let twoD = [];
  _.forEach(arr, e => {
    pomtwod.push(e);
    if (pomtwod.length === dsize) {
      twoD.push(pomtwod);
      pomtwod = [];
    }
  });
  // twoD.push(pomtwod);

  // console.log(twoD);
  let cutarr = [];
  let centering = Math.floor(csize / 2);
  // let centering = 0;

  let ypos = Math.floor(pos / dsize) - centering;
  let xpos = (pos % dsize) - centering;

  let xuntil = xpos + csize;
  let yuntil = ypos + csize;
  // pos -= 22;

  // if (mode) {
  //   let pomarr = [];
  //   while (yuntil > ypos) {
  //     while (xuntil > xpos) {
  //       if (xpos >= dsize || ypos >= dsize || xpos < 0 || ypos < 0) {
  //         pomarr.push(8);
  //       } else {
  //         pomarr.push(twoD[ypos][xpos]);
  //       }
  //       xpos++;
  //     }
  //     cutarr.push(pomarr);
  //     pomarr = [];
  //     xpos -= csize;
  //     ypos++;
  //   }
  // } else {
  while (yuntil > ypos) {
    while (xuntil > xpos) {
      if (xpos >= dsize || ypos >= dsize || xpos < 0 || ypos < 0) {
        cutarr.push(placeholderval);
      } else {
        cutarr.push(twoD[ypos][xpos]);
      }
      xpos++;
    }
    xpos -= csize;
    ypos++;
    // }
  }
  return cutarr;
}
