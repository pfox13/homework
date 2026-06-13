"use strict";

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let res = document.getElementById("res");

    let bmi = weight / (height * height);

    let resBmi = 'Ваш индекс массы тела: ' + bmi.toFixed(2);
    res.textContent = resBmi;
    
});