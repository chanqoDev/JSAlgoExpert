// Two Number Sum

// Q. write a fn
// input : non-empty array of Integers, integer to represent a Target-sum.
// if any two numbers in the input array sum up to the target sum,
// output : return the nums in an array
// if, no two numbers sum up to the target sum, the fn should return an empty array.

// Rules:
// > Target Sum has to be obtained by summing two diffrent ints in the array;
// > You can't add a single int to itself in order to obtain the target sum.
// > There will be at one pair up most.
// > The numbers could also be in reverse order

// HINT:  x is the input arr, you are trying to find the Y essentially,   X + Y = targetSum
// ex:
// arr = [3, 5, -4, 8, 11, 1, -1, 6]
// tagetSum = 10;

// Complexity

// O(n^2) Time | O(1) space
// because we are using a for-loop twice
function twoNumberSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secondNum = arr[j];
      // if (currentNum + secondNum === targetSum) return [currentNum, secondNum];
      if (currentNum === targetSum - secondNum) return [currentNum, secondNum];
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
