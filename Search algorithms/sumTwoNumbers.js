import readline from "readline";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Insert a target for search combination between 1 and 20: ", (number) => {
  const userInput = Number(number);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const searchNumbers = (array, target) => {
    let left = 0;
    let rigth = array.length - 1;
    let temp = 0;
    while (left <= rigth) {
      let mid = left + (rigth - left / 2);
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
    return "Not found combination ";
  };

  console.log(searchNumbers(arr, userInput));

  prompt.close();
});
