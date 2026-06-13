"use strict";

let but = document.querySelector("#btn");

but.addEventListener("click", onChange);

function onChange() {
    let ch = document.getElementById("change").value;
    let on = document.getElementById("on").value;

    let a = document.getElementById("image" + ch);
    let b = document.getElementById("image" + on);

    let temp = a.src;
    a.src = b.src;
    b.src = temp;
};
