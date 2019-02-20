export default function BlankBoard(size = 10) {
  let board = [];
  for (let i = 0; i < size; i++) {
    for (let o = 0; o < size; o++) {
      board.push({
        id: "0",
        type: "blank"
      });
    }
  }

  return board;
}
