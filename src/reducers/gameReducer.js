import {} from "../actions/types";
//statuses
/**
 * 0 - blank
 * 1 - body
 * 2 - water
 * 3 - hit
 */
const ShipTypes = {
  small: [[0, 0, 0], [0, 1, 0], [0, 1, 0]],
  medium: [[0, 0, 0][(1, 1, 1)], [0, 1, 0]]
};
function BlankBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      board.push({ type: Math.random() > 0.9 ? "explosion" : "blank" });
    }
  }
  return board;
}
class Ship {
  /**
   * @type urcuje typ lodi: small,medium,tank
   * @pos urcuje zakladni pozici lodi, pokud je to nutne
   * @id urcuje o jakou konkretni lod se rovna, umozni v budoucnu vice modu

   */
  constructor(type, pos, id) {
    this.type = type;
    this.pos = pos;
    this.dshape = "small";
    this.id = id;
  }
}
const initialState = {
  myboard: {
    board: BlankBoard(),
    ships: [
      {
        type: "small",
        pos: false,
        posShape: [17, 27],
        shape: ShipTypes.small,
        rotation: 0,
        id: 0
      }
    ]
  }
};

export default function(state = initialState, action) {
  // console.log("reducer running")
  switch (action.type) {
    default:
      return state;
  }
}
