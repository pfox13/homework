const pole = document.getElementById("pole");

pole.value = localStorage.getItem("poleValue") || "";

pole.oninput = function() {
    localStorage.setItem("poleValue", pole.value);
}