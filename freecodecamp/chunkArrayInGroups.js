function chunkArrayInGroups(arr, size) {
  //Brute force solution...
  const subArrays = [];

  while (arr.length > 0) {
    // 0(n)
    const subArr = arr.splice(0, size); // splice method is 0(n)
    if (subArr.length !== 0) {
      subArrays[subArrays.length] = subArr;
    }
  }
  return subArrays;
}

//Therefore, this algorithm is 0(n2)

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

module.exports = chunkArrayInGroups;
