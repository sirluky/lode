export default function BlankBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      board.push({
        id: "0",
        type: "blank"
      });
    }
  }

  return board;
}
