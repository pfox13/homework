"use strict";

class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get getFullName() {
        return this._name + " " + this._surname;
    }

    get rate() {
        return this._rate;
    }

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

class Boss extends Worker {
    constructor(name, surname, rate, days, workers){
        super(name, surname, rate, days);
        this._workers = workers;
    }

    get workers() {
        return this._workers;
    }

    getSalary(){
        return this.rate * this.days * this.workers;
    }

}

const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

const boss = new Boss("Павел", "Николаевич", 10, 31, 10);
document.writeln("Имя: " + boss.name + "<br>");
document.writeln("Фамилия: " + boss.surname + "<br>");
document.writeln("Полное имя: " + boss.getFullName + "<br>");
document.writeln("Ставка: " + boss.rate + "<br>");
document.writeln("Количество дней: " + boss.days + "<br>");
document.writeln("Количество сотрудников: " + boss.workers + "<br>");
document.writeln("Зарплата: " + boss.getSalary() + "<br>");

