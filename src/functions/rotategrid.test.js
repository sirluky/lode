import { rotateGrid } from "./functions";

test("rotations", () => {
  expect(rotateGrid([[0, 1, 1], [0, 1, 0], [0, 0, 0]], 1)).toEqual([
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
  ]);
  const toTest = [
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 5],
    [1, 0, 0, 0, 0]
  ];
  const rotated270 = rotateGrid(toTest, 4);

  let graduallyrot = rotateGrid(toTest, 2);
  graduallyrot = rotateGrid(graduallyrot, 3);
  graduallyrot = rotateGrid(graduallyrot, 1);
  expect(rotateGrid(rotated270)).toEqual(graduallyrot);
});
