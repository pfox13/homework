"use strict";

let email = document.getElementById("email");

email.addEventListener("input", function () {
    let value = email.value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(value)) {
        email.classList.remove("error");
    } else {
        email.classList.add("error");
    }
});