// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1


const reverseNumber = (n) => {
  const numList = [...'' + n]
  return numList.includes('-')
    ? +(numList.slice(0, 1) + numList.reverse().slice(0, -1).join(''))
    : +(numList.reverse().join(''));
}