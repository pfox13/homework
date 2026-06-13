let n = prompt("Количество символов:");
let sym = prompt("Тип символа:");
let orient = prompt("0 - горизонтальная линия \n 1 - вертикальная линия");

for (let i = 0; i < n; i++) {
    if (orient == 0) {
        document.writeln(sym);
    } else if(orient == 1) {
        document.writeln(sym + "<br>");
    } else {
        document.writeln("Такой ориентации не существует");
        break;
    }
}
