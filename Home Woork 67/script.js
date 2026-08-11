const storageType = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(";")
            .map(cookie => cookie.split("="))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`;
    },
    
};

const agree = "jdc_consent";
const showPopup = () => !storageType.getItem(agree);
const saveToStorage = () => storageType.setItem(agree, true);

window.addEventListener("load", () => {
    const acceptFn = event => {
        saveToStorage(storageType);
        agreePopup.classList.add("hidden");
    }
    const agreePopup = document.getElementById("consent-popup");
    const acceptBtn = document.getElementById("accept");

    acceptBtn.addEventListener("click", acceptFn);

    if (showPopup(storageType)) {
        setTimeout(() => {
            agreePopup.classList.remove("hidden")
        }, 1000);
    }
})

// document.cookie = "jdc_consent=;";

