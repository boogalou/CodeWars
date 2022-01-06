function getStrings(city) {
  const tmp = city.toLowerCase().split('')
    .reduce((acc, cur) => {
      !acc[cur] ? acc[cur] = '*' : acc[cur] += '*';
      return acc
    }, {});
  return Object.entries(tmp)
    .filter(item => !item.includes(' '))
    .map(item => item.join(':')).toString();

}

const result = getStrings("Las Vegas");
console.log(result);
