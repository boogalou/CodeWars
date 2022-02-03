function func(nums, char = '*') {
  let row = '';
  let column = '';
  for (let i = 0; i < 3; i++) {
    row += char.repeat(i)
    for (let k = 0; k < 3; k++) {
      column += char.repeat(k);
      console.log(`iterarion>>`, i, column.length);
    }
  }
  console.log(row);
  console.log(column);
}

const result = func(12345, '*');

console.log(result);