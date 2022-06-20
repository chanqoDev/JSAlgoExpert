// Challenge : Smallest Difference

/**
 * Write a func() that takes in two arrays of integers that are non-empty.
 * Finds the pair of numbers ( one from each array) whos absolute difference is closest to zero. (and)
 * it returns an array contianing these two numbers, with the number from the first array in the first position.
 *
 * NOte: that the absolute difference of two ints is the distance between them on the real number line.
 * Exmaple: the absolute diffenrence of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.
 *
 *
 * Assume that there will only be one pair of numbers with the smallest difference.
 */

// Time 0(nLog(n) + mLog(m)) time | 0(1) space
// const smallestDifference = (arrayOne, arrayTwo) => {
// arrayOne.sort((a, b) => a - b);
// arrayTwo.sort((a, b) => a - b);

// let idxOne = 0;
// let idxTwo = 0;
// let smallest = Infinity;
// let current = Infinity;
// let smallestPair = [];
// while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
//     let firstNum = arrayOne[idxOne];
//     let secondNum = arrayTwo[idxTwo];
//     if (firstNum < secondNum) {
//     current = secondNum - firstNum;
//     idxOne++;
//     } else if (secondNum < firstNum) {
//     current = firstNum - secondNum;
//     idxTwo++;
//     } else {
//     return [firstNum, secondNum];
//     }
//     if (smallest > current) {
//     smallest = current;
//     smallestPair = [firstNum, secondNum];
//     }
// }
// return smallestPair;
// };

// SOLUTION 2: BEST SOlution
const smallestDifference = (arr1, arr2) => {
  let bestPair = [],
    smallestDiff = Infinity;

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      let difference = Math.abs(num1 - num2);

      if (difference < smallestDiff) {
        smallestDiff = difference;
        bestPair = [num1, num2];
      }
    }
  }
  return bestPair;
};

const arrayOne = [-1, 5, 10, 20, 28, 3]; // [ -1, 3, 5, 10, 20, 28 ]
const arrayTwo = [26, 134, 135, 15, 17]; // [ 15, 17, 26, 134, 135 ]

const output = smallestDifference(arrayOne, arrayTwo);
console.log(output);
