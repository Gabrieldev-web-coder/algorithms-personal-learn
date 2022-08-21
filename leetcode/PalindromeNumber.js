function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

  let reverse = 0;

  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = ~~(x / 10);
  }

  return x === reverse || x === ~~(reverse / 10);
}
//Better approach without convert integer in string and in array, just working with integer number finding the half integer and compare it with original
//0(logn100)
