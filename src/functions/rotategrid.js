/**
 *
 * @param {*} arr2d 2d pole k otoceni
 * @param {*} rot rotace 1-4
 */
export default function rotate(arr2d, rot) {
  const l = arr2d.length;
  let pomx, pomy;
  const rotated = arr2d.map(e => e.map(p => p));
  if (rot === 1) {
    return rotated;
  }
  if (rot === 4) {
    for (let o = 0; o < l; o++) {
      for (let i = 0; i < l; i++) {
        pomx = l - 1 - i;
        pomy = o;
        rotated[pomx][pomy] = arr2d[o][i];
      }
    }
  } else if (rot === 3) {
    for (let o = 0; o < l; o++) {
      for (let i = 0; i < l; i++) {
        pomx = l - 1 - i;
        pomy = l - 1 - o;
        rotated[pomx][pomy] = arr2d[i][o];
      }
    }
  } else if (rot === 2) {
    for (let o = 0; o < l; o++) {
      for (let i = 0; i < l; i++) {
        pomx = l - 1 - i;
        pomy = o;
        rotated[pomy][pomx] = arr2d[i][o];
      }
    }
  }
  return rotated;
}
