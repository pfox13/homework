"use strict";

let modal = document.getElementById("modal");
let btn = document.getElementById("btn");
let close = document.querySelector(".close");

btn.addEventListener("click", function () {
    modal.style.display = "block";
});

close.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

let form = document.querySelector(".modal__content-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;

    console.log("Имя: " + name + ", Email: " + email + ", Вопрос: " + question);
});