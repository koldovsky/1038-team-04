//Додаткові задачки по JS, щоб формувати навички, якщо маєте час і бажання 
//Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

//Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.ceil(year / 100);
}

//Multyply two numbers    https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

const multiply = (x, y) => x * y;

//Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}

//Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}

//Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180 - a - b;
}

//Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return n * 2 - 2;
}

//What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  return n >= 13 ? n - 2 : n <= 0 ? n : n - 1;
}
//Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

//Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x){
  let y =[];
for (let i =0; i<x.length; i++){
   y[i]=x[i]*2;
}
   return y;
}
const myArray = [1,2,3,7,7,8];
let y = maps(myArray);
console.log(y);
