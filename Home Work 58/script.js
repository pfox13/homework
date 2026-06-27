"use strict";

let start = document.getElementById("start");
let game = document.getElementById("game");
let time = document.getElementById("time");
let timeHeader = document.getElementById("time-header");
let resultHeader = document.getElementById("result-header");
let result = document.getElementById("result");
let gameTime = document.getElementById("game-time");
let score = 0;
let isGameStarted = false;


start.addEventListener("click", startGame);
game.addEventListener("click", handelBoxClick);
gameTime.addEventListener("input", setGameTime)

function startGame() {
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    setGameTime();

    gameTime.setAttribute("disabled", "true");

    isGameStarted = true;
    start.classList.add("hide");
    game.style.background = "#fff";

    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
};

function setGameTime() {
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
}

function endGame() {
    isGameStarted = false;

    result.textContent = score;

    gameTime.removeAttribute("disabled");

    start.classList.remove("hide");
    game.innerHTML = "";
    game.style.background = "#9be8fb";

    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");


}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function renderBox() {
    game.innerHTML = "";
    let box = document.createElement("div");
    let boxSize = getRandom(30, 100);

    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;

    box.style.width = box.style.height = boxSize + "px";
    box.style.background = `rgb(${createColor()},${createColor()},${createColor()})`;
    box.style.position = "absolute";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true");

    game.insertAdjacentElement("afterbegin", box);
};

function createColor() {
    return Math.floor(Math.random() * 256);
}

function handelBoxClick(event) {
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    };
};