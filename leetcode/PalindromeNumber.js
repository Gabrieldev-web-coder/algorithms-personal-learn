function isPalindrome(x) {
  const s = Number(String(x).split("").reverse().join(""));
  return x === s;
}
//My first iteration over Palindrome number, quadratic time complexity 0(n2)
