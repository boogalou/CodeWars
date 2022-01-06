'Find The Parity Outlier'

function findOutlier(arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) counter++
  };
  return counter > 1
    ? +arr.filter(itm => itm % 2 !== 0)
    : +arr.filter(itm => itm % 2 === 0);
};

const result = findOutlier([0, 0, 3, 0, 0]);
console.log(result);




