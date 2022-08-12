const searchNumbers = require("../Search algorithms/sumTwoNumbers.js");

test("Test #1", () => {
  expect(searchNumbers([-3, 4, 3, 90], 0)).toStrictEqual([0, 2]);
});

test("Test #2", () => {
  expect(searchNumbers([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("Test #3", () => {
  expect(searchNumbers([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("Test #4", () => {
  expect(searchNumbers([3, 3], 6)).toStrictEqual([0, 1]);
});

// const arr = [-3, 4, 3, 90];  target = 0;

// //const arr = [2, 7, 11, 15]; //target = 9;

// // const arr = [3,2,4] target = 6;

// // const arr = [3,3]; target = 6
