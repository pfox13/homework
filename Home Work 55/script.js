"use strict";

let winner = {
    name: "Дмитрий",
    colors: ["красный", "желтый", "зеленый", "черный", "белый", "серый", "оранжевый", "розовый", "фиолетовый", "голубой"],
    car: "Ferrari",

    showInfo: function () {
        let randomIndex = Math.floor(Math.random() * this.colors.length);
        let randomColor = this.colors[randomIndex];

        document.writeln(this.name + " выиграл " + randomColor + " " + this.car);
    }
}

winner.showInfo();