"use strict";

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.who = function () {
        document.writeln("Я " + this.name + ", мне " + this.age + " лет. Я работаю " + this.job + ".<br><br>");
    };
}
let person1 = new Person("Дмитрий", 26, "дизайнером");
let person2 = new Person("Станислав", 29, "программистом");
let person3 = new Person("Сергей", 35, "менеджером");

person1.who();
person2.who();
person3.who();