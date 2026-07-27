"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20; // размер одного сегммнта
let snake, direction, foot, score, gameSpeed, gameRunning;

function startGame() {
    snake = [{
        x: 200,
        y: 200
    }];

    direction = "RIGHT";
    score = 0;
    gameSpeed = 150;
    foot = getRandomFootPosition();
    gameRunning = true;

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";

    gameLoop();
}

function getRandomFootPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    }
}

function gameOver() {
    gameRunning = false;
    let result = document.createElement("p");
    result.innerHTML = `<span style="color: orangered">Игра окончена! Ваш счёт: ${score}</span>`;
    scoreEl.prepend(result);
    startButton.style.display = 'inline';
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red"; // заливка
    ctx.fillRect(foot.x, foot.y, gridSize, gridSize);

    ctx.fillStyle = "black"; // контур
    ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);

    snake.forEach(segment => {
        ctx.fillStyle = "green"; // заливка
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);

        ctx.fillStyle = "black"; // контур
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    let head = { ...snake[0] };

    if (direction === "UP") {
        head.y -= gridSize;
    }
    if (direction === "DOWN") {
        head.y += gridSize;
    }
    if (direction === "LEFT") {
        head.x -= gridSize;
    }
    if (direction === "RIGHT") {
        head.x += gridSize;
    }

    if (head.x < 0 || head.x >= canvas.width || head.y >= canvas.height || head.y < 0) {
        gameOver();
        return;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    if (head.x === foot.x && head.y === foot.y) {
        foot = getRandomFootPosition();
        score++;
        scoreEl.textContent = `Счёт: ${score}`;
        if (gameSpeed > 450) {
            gameSpeed -= 5;
        }
    } else {
        snake.pop();
    }

    if (snake.length > 0) {
        setTimeout(gameLoop, gameSpeed);
    }

    console.log(snake);

}

function changeDirection(event) {
    const key = event.key;

    if (key == "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (key == "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (key == "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (key == "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
}

document.addEventListener("keydown", changeDirection)
startButton.addEventListener("click", startGame);