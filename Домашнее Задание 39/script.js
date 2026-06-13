"use strict";

let chislo = +prompt("Число: ", 5);

document.writeln(chislo + "! = " + degree(chislo));

function degree(chislo) { // 0
    if (chislo){
        return chislo * degree(chislo - 1); // 5  4  3  2  1
    }
    return 1;
};

