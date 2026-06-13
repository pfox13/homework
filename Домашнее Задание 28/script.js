// ==========================================================
let i = 10;          
let res = 1;     

while (i <= 30) {    
  if (i % 2 ) {   
    res *= i;    
  }
  i++;               
}

console.log("Произведение нечетных чисел: " + res); 
// ==========================================================

let sum = 0;
let count = -1;
let n;

do {
    n = +prompt("Введите число");
    sum += n;
    count++;
}while (n != 0);

document.writeln("Среднее арифмитеческое: " + sum / count);
console.log("sum", sum);
console.log("count", count);


