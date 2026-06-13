"use strict";

let date = new Date();

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let day = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();
let weekDay = days[date.getDay()];

let formattedDate = `${day} ${month} ${year} год, ${weekDay}`;

document.writeln(formattedDate);