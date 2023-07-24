//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(' ');
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
//Поглиблені задачки (робити за бажанням):
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    return (queue.indexOf('wolf') === queue.length - 1) ? "Pls go away and stop eating my sheep" :
        "Oi! Sheep number " + (queue.length - queue.indexOf('wolf') - 1) + "! You are about to be eaten by a wolf!";
}
//https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x) {
    let result = [];
    for (let i of x) {
        result.push(i * 2);
    }
    return result;
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) res.push(arr[i + 1])
    }
    return (res[0] === undefined) ? null : res[0];
}

