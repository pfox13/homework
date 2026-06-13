"use strict";

let reg = document.querySelector(".register");
let h2 = document.querySelector("h2");

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;
    let errors = "";

    if (login == "" || password == "" || password2 == "") {
        errors += alert("Все поля должны быть заполнены");
        return;
    }

    if (password != password2) {
        errors += alert("Пароли не совпадают");
    }

    if (password.length < 3 || password2.length < 3) {
        errors += alert("Ваш пароль слишком маленький");
    }

    if (errors == "") {
        alert("Регистрация прошла успешно"); 
    }
});

