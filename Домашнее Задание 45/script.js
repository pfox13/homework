"use strict";

let lengthPath = 5;

let pagination = document.querySelector(".pagination");
let product = document.querySelector(".product-cover");
let data = new Array(18);

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }

    let node = document.createTextNode(i + 1);
    data[i].append(node);

    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunks(0);

function splitParts(arr) {
    if (arr.length > lengthPath) { 
        let chunks = [];

        for (let i = 0; i < arr.length; i += lengthPath) {
            chunks.push(arr.slice(i, i + lengthPath));
        }

        return chunks;
    } else {
        return arr;
    }
}

function renderChunks(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false;
    }
}

let currentPage = 0;

let prevBtn = document.createElement("button");
prevBtn.textContent = "Назад";

let nextBtn = document.createElement("button");
nextBtn.textContent = "Вперед";

pagination.append(prevBtn);
pagination.append(nextBtn);

prevBtn.addEventListener("click", () => {
    currentPage--;
    renderChunks(currentPage);
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    renderChunks(currentPage);
});
