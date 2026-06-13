let num = +prompt("Введите пятизначное число", 39671);
let one, two, three, four, five;

if (isNaN(num)) {
    alert("Вы ввели НЕ число");
} else if (num < 10000 || num > 99999) {
    alert("Вы ввели НЕ пятизначное число");
} else {
    console.log("Ваше число:" + num);

    one = num % 10;
    console.log(one);

    num = parseInt(num / 10);
    two = num % 10;
    console.log(two);

    num = parseInt(num / 10);
    three = num % 10;
    console.log(three);

    num = parseInt(num / 10);
    four = num % 10;
    console.log(four);

    num = parseInt(num / 10);
    five = num % 10;
    console.log(five);

    let multip = one * two * three * four * five;
    console.log("Произведение: " + multip);

    let sum = one + two + three + four + five;

    console.log("Среднее арифметическое: " + (sum / 5));
}


