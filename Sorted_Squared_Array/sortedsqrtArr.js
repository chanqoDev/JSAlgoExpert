// Sorted Squared Array
// Write a function that takes in a non-empty array of integers that are sorted in ascending order.
// and retunrs a new array of the same length with the squares of the original integers also soreted in ascending order.

// input: array of integers "sorted in ascending order"
// output: new arr of the same length with the squares of the original ints ( same ascending order)
// Time: 0(nlogn) || space: 0(n) :: where n is the length of the input arr.
const map = (arr, cbf) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let newElem = cbf(arr[i], i, arr);
    output.push(newElem);
  }
  return output;
};

const sortedSquaredArr = (arr) => {
  const result = arr.map((num) => num ** 2);
  result.sort((a, b) => a - b);
};
