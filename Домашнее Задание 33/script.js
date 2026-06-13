"use strict";

let mas = [];
let n;

for (let i = 0; i < 10; i++) {
    n = +prompt("Введите элемент массива:");
    mas.push(n);
    document.writeln(mas[i] + " ");
}

let max = mas[0];
for (let i = 0; i < 10; i++){
    if (max < mas[i]) {
        max = mas[i];
    }
}

document.writeln("<br>");
document.writeln("Максимальное значение: ", max + "<br>");

let index = mas.indexOf(max);
console.log(index);

mas.splice(index, 1);
mas.unshift(max);

document.writeln("Массив: " + mas);