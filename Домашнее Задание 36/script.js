"use strict";

let monts = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let i = 0; i < monts.length; i++) {
    document.writeln("<div>" + monts[i] + "</div>");
    let mon = document.querySelectorAll("div")[i];
    mon.style.background = `rgb(${createColor()},${createColor()},${createColor()})`
    mon.style.fontWeight = 'bold';
    mon.style.textAlign = 'center';
    mon.style.padding = '15px';
};

function createColor() {
    return Math.floor(Math.random() * 256);
}
