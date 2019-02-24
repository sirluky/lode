import mediumImg from "./images/lod-m.svg";
import smallImg from "./images/lod-s.svg";
import microImg from "./images/lod-micro.svg";
import quadImg from "./images/lod-quad.svg";

/**
 *
 * 0 - blank,
 * 1 - body,
 * 2 - water,
 * 3 - hit,
 */
export const ShipTypes = {
  none: { img: "", model: [[0]] },
  small: { img: smallImg, model: [[0, 0, 0], [0, 1, 0], [0, 1, 0]] },
  medium: { img: mediumImg, model: [[0, 1, 0], [0, 1, 1], [0, 1, 0]] },
  quad: { img: quadImg, model: [[0, 1, 0], [1, 1, 1], [0, 1, 0]] },
  micro: { img: microImg, model: [[0, 0, 0], [0, 1, 0], [0, 0, 0]] }
};
