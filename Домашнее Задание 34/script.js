"use strict";

let mas = new Array(9);
let res = [];

for (let i = 0; i < 9; i++) {
    let a = +prompt("Введите набор чисел");
    mas[i] = a;
}

document.writeln("Ваш массив: ", mas + "<br>")

for (let el of mas) {
    if (!res.includes(el) && el % 3 == 0) {
        res.push(el);
    }
}

document.writeln("Числа кртные трём из вашего массива:",  res)



