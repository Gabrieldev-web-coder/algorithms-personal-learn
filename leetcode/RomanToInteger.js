function romanToInt(s) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let count = 0;
  for (let i = 0, j = i + 1; i < s.length; i++, j++) {
    if (map.get(s[i]) === "I" && map.get(s[j]) === "V") {
      count += 4;
      i++;
    } else if (map.get(s[i]) === "I" && map.get(s[j]) === "X") {
      count += 9;
      i++;
    } else if (map.get(s[i]) === "X" && map.get(s[j]) === "L") {
      count += 40;
      i++;
    } else if (map.get(s[i]) === "X" && map.get(s[j]) === "C") {
      count += 90;
      i++;
    } else if (map.get(s[i]) === "C" && map.get(s[j]) === "D") {
      count += 400;
      i++;
    } else if (map.get(s[i]) === "C" && map.get(s[j]) === "M") {
      count += 900;
      i++;
    } else {
      count += map.get(s[i]);
    }
  }

  return count;
}

/* 

Actually learned.

I forgot that strings are iterable, mapping was aplied successfuly, we can define rules to solve a problems

*/

module.exports = romanToInt;
