/** 
 * Challege: VALIDATE SUBSEQUENCE 
 * 
 Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers 
 * 
 * **/

// Time = 0 (n) : we will iterate through the main array inorder to find out if its not contained at the end.
// Space complexity :  0 (1) constant because we are not storing anything that will increase in size.
/*
const validateSubsequence = (mainArr, seqArr) => {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < mainArr.length && seqIdx < seqArr.length) {
    if (arr[arrIdx] === seqArr[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === seqArr.length;
};
* **/
// solution 2
// 0(n) time | 0(1) space
const validateSubsequence = (mainArr, seqArr) => {
  let seqIdx = 0;
  for (const val of mainArr) {
    if (seqIdx === seqArr.length) break;
    if (seqArr[seqIdx] === val) seqIdx++;
  }
  return seqIdx === seqArr.length;
};

let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let subArr = [1, 6, -1, 10];
console.log(validateSubsequence(arr, subArr));
