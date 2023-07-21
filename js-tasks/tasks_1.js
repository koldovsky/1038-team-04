//Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num > 0) {
    return num * (-1);
  } else {
    return num ;
  }
}
//////////////////////////
function makeNegative(num) {
  return num > 0 ? -num : num;
}
//////////////////////////
function makeNegative(num) {
  if (num < 0) return num;
  return -num;
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2; 
}

//Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
      if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}
////////////////////////////
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
////////////////////////////
function greet(name, owner) {
  if (name === owner) return "Hello boss";
  return "Hello guest";
}

//Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
    if (flower1 % 2 == flower2 % 2) {
    return false;
  } else {
    return true;
  }
}
////////////////////////
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1 ? true : false;
}
///////////////////////
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  )
    return true;
  return false;
}
