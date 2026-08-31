let inputRub = document.getElementById("rub");
let inputUsd = document.getElementById("usd");
let inputEur = document.getElementById("eur");

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "current.json");
    request.send();

    request.addEventListener("load", () => {
        if (request.status == 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
            inputEur.value = (inputRub.value / data.current.eur).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так"
            inputEur.value = "Что-то пошло не так"
        }
    })
})