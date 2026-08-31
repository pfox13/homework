let arr = ["Привет", 72];

let map = new Map();
map.set("строка", arr[0]);
map.set("число", arr[1]);

document.writeln(map.get("строка") + "<br><br>");
document.writeln(map.get("число") + "<br>");