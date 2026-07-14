"use strict";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

c.lineWidth = 2;
c.strokeStyle = "#555";

// Внешний круг (лицо)
c.beginPath();
c.arc(150, 150, 100, 0, Math.PI * 2);
c.stroke();

// Левый глаз
c.beginPath();
c.arc(120, 120, 7, 0, Math.PI * 2);
c.stroke();

// Правый глаз
c.beginPath();
c.arc(180, 120, 7, 0, Math.PI * 2);
c.stroke();

// Улыбка
c.beginPath();
c.arc(150, 150, 55, 0.2 * Math.PI, 0.8 * Math.PI, false);
c.stroke();