"use strict";

// Задача 1 
// Function Declaration

function findMax(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Числа равны";
    }
};
console.log(findMax(10, 10));

// Function Expression

let findMaxTwo = function (a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
};

let result = findMaxTwo(15, 15);

console.log(result);

// Стрелочная функция 

let findMaxArrow = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(findMaxArrow(20, 20));

//==============================================================================
// Задача 2 
// Function Declaration

function findMaxInArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(findMaxInArray([3, 33, 148, 333, 994]));


// Function Expression

let getMaxArr = function (numbers) {
    let result = numbers[0];
    for (const num of numbers) { 
        if (num > result) result = num;
    }
    return result;
};
console.log(getMaxArr([3, 33, 148, 333, 994]));


// Стрелочная функция 

const arr = [3, 33, 148, 333, 994];

const max = arr.reduce((a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
});

console.log(max); 


