"use strict";

let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig;
    text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5");
    // 
    console.log(text);

    document.writeln(`
        <fieldset>
            <legend>${name}</legend>
            <div>${text}</div>
        </fieldset>    
    `)
};