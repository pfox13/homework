"use strict";

function Automobile(color, model, year, manufact) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;

    this.whatColor = function () {
        document.writeln("Цвет машины: " + this.color + "<br>");
    };

    this.autoInfo = function () {
        document.writeln("Модель машины: " + this.model + "<br>");
        document.writeln("Год выпуска: " + this.year + "<br>");
        document.writeln("Производитель автомобиля: " + this.manufact + "<br><br>");
    };
}

let car1 = new Automobile("Красный", "Nissan Skyline", 2007, "Nissan");
let car2 = new Automobile("Черный", "Toyota Corolla", 2009, "Toyota");
let car3 = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");

car1.whatColor();
car1.autoInfo();

car2.whatColor();
car2.autoInfo();

car3.whatColor();
car3.autoInfo();