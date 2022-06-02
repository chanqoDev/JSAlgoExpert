// // Two Number Sum

// // Q. write a fn
// // input : non-empty array of Integers, integer to represent a Target-sum.
// // if any two numbers in the input array sum up to the target sum,
// // output : return the nums in an array
// // if, no two numbers sum up to the target sum, the fn should return an empty array.

// // Rules:
// // > Target Sum has to be obtained by summing two diffrent ints in the array;
// // > You can't add a single int to itself in order to obtain the target sum.
// // > There will be at one pair up most.
// // > The numbers could also be in reverse order

// // HINT:  x is the input arr, you are trying to find the Y essentially,   X + Y = targetSum
// // ex:
// // arr = [3, 5, -4, 8, 11, 1, -1, 6]
// // tagetSum = 10;

// // Complexity

// // O(n^2) Time | O(1) space

// // function twoNumberSum(arr, targetSum) {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] + arr[j] === targetSum) {
// //         return [arr[i], arr[j]];
// //       }
// //     }
// //   }
// //   return [];
// // }

// // because we are using a for-loop twice
// // function twoNumberSum(arr, targetSum) {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     const currentNum = arr[i];
// //     for (let j = i + 1; j < arr.length; j++) {
// //       const secondNum = arr[j];
// //       // if (currentNum + secondNum === targetSum) return [currentNum, secondNum];
// //       if (currentNum === targetSum - secondNum) return [currentNum, secondNum];
// //     }
// //   }
// //   return [];
// // }

// // O(n) time | O(n) space "because we're storing the values in the Hash"
// // y =  targetSum - X
// // function twoNumberSum(arr, target) {
// //   let nums = {};
// //   for (const num of arr) {
// //     if (target - num in nums) {
// //       return [target - num, num];
// //     } else {
// //       nums[num] = true;
// //     }
// //   }
// //   return [];
// // }

// // Time = 0(nlog(n))
// // Space = 0(1)

// // const twoNumberSum = (a, t) => {
// //   for (let i = 0; i < a.length - 1; i++) {
// //     for (let j = i + 1; j < a.length; j++) {
// //       if (a[i] + a[j] === t) {
// //         return [a[i], a[j]];
// //       }
// //     }
// //   }
// // };

// function twoNumberSum(arr, tsum) {
//   const cache = {};
//   for (const num of arr) {
//     // console.log(num); // 3, 4, -4, 8
//     if (tsum - num in cache) {
//       console.log([tsum - num]);
//       return [tsum - num, num];
//     } else {
//       cache[num] = true;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
// console.log(twoNumberSum([], 9));
// console.log(twoNumberSum([5, 8, 3, 2, 4, 50, 6], 54));
