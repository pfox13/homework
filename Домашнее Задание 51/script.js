"use strict";

let st = "-1.5 0 2 -123.4."
let reg = /-?\d+(\.\d+)?/g;
document.writeln(st.match(reg)); //-1.5,0,2,-123.4