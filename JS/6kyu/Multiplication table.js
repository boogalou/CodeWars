// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) => {

  const arr = []
  for (let i = 1; i <= size; i++) {
    arr[i - 1] = [];
    for (let k = 1; k <= size; k++) {
      arr[i - 1][k - 1] = i * k;
    }
  }
  return arr;
}

const result = multiplicationTable(9);

console.log(result);