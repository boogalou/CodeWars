// Compare powers

// You certainly can tell which is the larger number between 210 and 215.
// But what about, say, 210 and 310? You know this one too.
// Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?
// Well, by now you have surely guessed that you have to build a function to compare powers,
// returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare 
// will be provided in the [base, exponent] format:

// const n1 = [198, 669];
// const n2 = [486, 161];

// function comparePowers(n1, n2) {
//   return [n1, n2].reduce((a, b) => console.log(a[0] ** a[0] ^ b[0] ** b[1]));
// }

// const result = comparePowers(n1, n2)

// console.log(result);



const gloves =
  ['red', 'red', 'red', 'red']




function numberOfPairs(gloves) {
  const pair = gloves.reduce((a, b) => {
    !a[b] ? a[b] = 1 : a[b]++
    return a;
  }, {});
  let res = 0;
  Object.values(pair).filter(pair => pair > 1)
    .map(pair => pair > 2 && pair % 2 !== 0 ? pair - 1 : pair)
    .forEach(pair => pair > 2 ? res += pair / 2 : pair === 2 ? res++ : pair);
  return res;
};


const result = numberOfPairs(gloves);

console.log(result);