"use strict";


let input = document.querySelectorAll("input[type='radio']");
let form = document.forms.form1;

let button = document.querySelector("input[type='button']");
button.addEventListener("click", check);

function check() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            alert("Вы выбрали: " + input[i].value);
        }
    }
}

