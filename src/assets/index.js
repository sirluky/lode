import mediumImg from "./images/lod-m.svg";
import smallImg from "./images/lod-s.svg";

/**
 *
 * 0 - blank,
 * 1 - body,
 * 2 - water,
 * 3 - hit,
 */
export const ShipTypes = {
  small: { img: smallImg, model: [[0, 0, 0], [0, 1, 0], [0, 1, 0]] },
  medium: { img: mediumImg, model: [[0, 1, 0], [0, 1, 1], [0, 1, 0]] }
};
