const searchNumbers = (array, target) => {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(array[i], i);
    }
  }
};
module.exports = searchNumbers;
