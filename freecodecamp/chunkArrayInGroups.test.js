const chunkArrayInGroups = require("../freecodecamp/chunkArrayInGroups.js");

test("Test #1", () => {
  expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toStrictEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("Test #2", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toStrictEqual([
    [0, 1, 2],
    [3, 4, 5],
  ]);
});

test("Test #3", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([
    [0, 1],
    [2, 3],
    [4, 5],
  ]);
});

test("Test #4", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([
    [0, 1, 2, 3],
    [4, 5],
  ]);
});

test("Test #5", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6],
  ]);
});

test("Test #6", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8],
  ]);
});

test("Test #7", () => {
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8],
  ]);
});
