"use strict";

let str = +prompt("Введите любое число");
let str1 = "";

let s = str + str1; 

let lastDigit = s[s.length - 1]; 
let count = 0; 

for (let i = 0; i < s.length; i++) {
    if (s[i] === lastDigit) {
        count++;
    }
}

console.log(count);