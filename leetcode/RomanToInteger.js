function romanToInt(s) {
  const romanNumerals = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const romanNums = s.split(""); //O(n)
  let count = 0;
  let j = 0;

  for (let i = 0; i < romanNums.length; i++) {
    // Lookup time constant by map.
    j++;
    if (romanNumerals.get(romanNums[i]) < romanNumerals.get(romanNums[j])) {
      let existentIndex = romanNums[j] ? romanNums[j] : romanNums[j - 1];
      let subSubstract =
        romanNumerals.get(romanNums[i]) - romanNumerals.get(existentIndex);
      count = count - subSubstract;
    } else if (
      romanNumerals.get(romanNums[i]) > romanNumerals.get(romanNums[j])
    ) {
      let existentIndex = romanNums[j] ? romanNums[j] : romanNums[j - 1];
      let subPlus =
        romanNumerals.get(romanNums[i]) + romanNumerals.get(existentIndex);
      count = count + subPlus;
    } else {
      count = count + romanNumerals.get(romanNums[i]);
    }
  }
  return count;
}

console.log(romanToInt("V"));

module.exports = romanToInt;
