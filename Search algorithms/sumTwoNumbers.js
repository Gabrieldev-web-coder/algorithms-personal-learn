const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const searchNumbers = (array, target) => {
  let left = 0;
  let rigth = array.length - 1;
  let temp = 0;
  let showcase;
  while (left <= rigth) {
    let mid = left + (rigth - left / 2);
    showcase = mid;
    if (array[mid] + array[temp] === target) {
      return [mid, temp];
    } else if (target < array[mid] + array[temp]) {
      rigth = mid - 1;
      temp = mid;
    } else {
      left = mid + 1;
      temp = mid;
    }
  }
  let possible = (temp + showcase);
  return "Not found combination " + array[possible] + " " + possible;
};

console.log(searchNumbers(arr, 18));
// let i = arr[4] + arr[4] - 1;
// console.log(arr[i]);
