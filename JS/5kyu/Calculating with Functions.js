// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



let executor = (fn, num) => fn ? fn(num) : num;
let one = fn => executor(fn, 1);
let two = fn => executor(fn, 2);
let three = fn => executor(fn, 3);
let four = fn => executor(fn, 4);
let five = fn => executor(fn, 5);
let six = fn => executor(fn, 6);
let seven = fn => executor(fn, 7);
let eight = fn => executor(fn, 8);
let nine = fn => executor(fn, 9);

let plus = a => b => b + a;
let minus = a => b => b - a;
let times = a => b => b * a;
let dividedBy = a => b => Math.floor(b / a);