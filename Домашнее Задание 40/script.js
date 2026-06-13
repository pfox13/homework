"use strict";

let btnOn = document.getElementById("on");
let btnOff = document.getElementById("off");
let img = document.getElementById("img");

btnOn.onclick = function () {
    img.style.display = "block";
    return false;
};

btnOff.onclick = function () {
    img.style.display = "none";
    return false;
};
