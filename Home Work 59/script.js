"use strict";

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.p = (this.a + this.b + this.c) / 2; // Нахождение полупериметра
        this.square = Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)); // Нахождение площади по формуле Герона

        this.perimeter = this.a + this.b + this.c;
    };
};

class Circle {
    constructor(r) {
        this.r = r;
        this.square = (Math.PI * (this.r ** 2)).toFixed(0); 

        this.perimeter = (2 * Math.PI * this.r).toFixed(0);
    };
};

let triangle = new Triangle(3, 4, 5);
let circle = new Circle(5);

console.log(triangle.square); // 6
console.log(triangle.perimeter); // 12

console.log(circle.square); // 79
console.log(circle.perimeter); // 31