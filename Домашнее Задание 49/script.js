"use strict";

let str = "Это пример строки с несколькими пробелами";

let reg = /\s/g;

let result = str.replace(reg, "_");

console.log(result); // Это_пример_строки_с_несколькими_пробелами