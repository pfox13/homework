document.getElementById("load").addEventListener("click", load);

async function load() {
    try {
        let url = "https://jsonplaceholder.typicode.com/todos";

        let response = await fetch(url);
        let data = await response.json();

        let completedTasks = data.filter(function (item) {
            return item.completed === true;
        });

        completedTasks.sort(function (a, b) {
            return a.userId - b.userId;
        });

        let html = completedTasks.map(function (item) {
            return "<li>" +
                "Пользователь: " + item.userId +
                " выполнил задачу № " + item.id +
                " (" + item.title + ")" +
                "</li>";
        });

        document.getElementById("list").innerHTML = html.join("");

    } catch (error) {
        console.error("Ошибка при загрузке: ", error);
    }
}