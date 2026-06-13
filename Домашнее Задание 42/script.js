"use strict";

let but = document.querySelector("#cl");
let text = document.getElementById("text"); // Обращаемся к элементу по id 
but.addEventListener("click", myMove);

function myMove() {
    let elem = document.getElementById("animate");
    text.style.display = "none"; // Скрыли ссылку
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {

        

        if (pos == 350) {
            clearInterval(id);
            text.style.display = "block"; // Верунли ссылку
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

    
    
};

