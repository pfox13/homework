let request = new XMLHttpRequest();
request.open("GET", "goods.json");
request.send();

let res = document.querySelector(".result");
let items, prices;

request.addEventListener("load", () => {
    if (request.status == 200) {
        items = JSON.parse(request.response);

        items.forEach(item => {

            typeof item.price === "string" ? item.price = +item.price.replace(/\D/g, "") : item.price = +item.price.new.replace(/\D/g, "");
            
            item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, "");

            res.innerHTML += `
                <h3>${item.name}</h3>
                <div>Цена: ${item.price} ${countItems(item.price)(["рублей", "рубль", "рубля"])}</div>
                <div>Отзывы: ${item.ratingRevievs} ${countItems(item.ratingRevievs)(["отзывов", "отзыв", "отзыва"])}</div>
                <hr>
            `;
        });

        document.querySelector(".feet").addEventListener("click", () => sortByFeetbacks(items));
        document.querySelector(".price").addEventListener("click", () => sortByPrice(items));
    }
});

function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    
    temp.sort((a, b) => a.price - b.price);
    res.innerHTML = "";

    temp.forEach(item => {
        res.innerHTML += `
            <h3>${item.name}</h3>
            <div>Цена: ${item.price} ${countItems(item.price)(["рублей", "рубль", "рубля"])}</div>
            <div>Отзывы: ${item.ratingRevievs} ${countItems(item.ratingRevievs)(["отзывов", "отзыв", "отзыва"])}</div>
            <hr>
        `;
    });
}

function sortByFeetbacks(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    
    temp.sort((a, b) => a.ratingRevievs - b.ratingRevievs);
    res.innerHTML = "";

    temp.forEach(item => {
        res.innerHTML += `
            <h3>${item.name}</h3>
            <div>Цена: ${item.price} ${countItems(item.price)(["рублей", "рубль", "рубля"])}</div>
            <div>Отзывы: ${item.ratingRevievs} ${countItems(item.ratingRevievs)(["отзывов", "отзыв", "отзыва"])}</div>
            <hr>
        `;
    });
}

function countItems(num) {
    let n = num % 10;
    let m = num % 100;
    let chislo = n == 1 && m !== 11 ? 1 : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
    return arr => arr[chislo];
}