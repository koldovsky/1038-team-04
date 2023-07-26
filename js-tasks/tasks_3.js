//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const radius = circle.radius;
  const res = 2 * Math.PI * radius;
    return res;                 
 }

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const res = [] 
  for (var key in obj){
    if ( key.length === 5) {  
      res.push(key) ;}
    if ( obj[key].length === 5 ) { 
      res.push(obj[key]); } 
   }
  return res
}

// опційна поглиблена задачка про замикання (дивіться відео від мене спочатку https://youtu.be/XJdzZgzLc08)
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    (function(current) {res.push(function() {return current; });
  })(i);
  }
  return res;
}

// опційна поглиблена задачка про наслідування 
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status)
  }
  
  introduce() {
    return super.introduce()+'  Meow meow!'
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status)
    this.master = master
  }
  
  greetMaster() {
    return `Hello ${this.master}`
  }
}
