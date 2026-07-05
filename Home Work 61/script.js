"use strict";

class Card {
    constructor(image, p) {
        this.src = image;
        this.p = p;
        this.out = ""
    }

    render(id) {
        this.out = `
            <img src="${this.src}" alt="Изображение">
            <p>${this.p}</p>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img1 = "https://images.icon-icons.com/534/PNG/96/secure-socket-layer-ssl_icon-icons.com_52820.png";
let card1 = new Card(img1, "Надежность");
card1.render("card");

let img2 = "https://images.icon-icons.com/3553/PNG/96/earth_location_globus_world_web_globe_ecommerce_icon_224946.png";
let card2 = new Card(img2, "Нет географических границ");
card2.render("card2");

let img3 = "https://images.icon-icons.com/1339/PNG/96/thumbup_87486.png";
let card3 = new Card(img3, "Большой ассортимент");
card3.render("card3");

let img4 = "https://images.icon-icons.com/3854/PNG/96/safety_icon_237407.png";
let card4 = new Card(img4, "Безопасность");
card4.render("card4");

let img5 = "https://images.icon-icons.com/569/PNG/96/eye-hidden-design-black-interface-symbol_icon-icons.com_54536.png";
let card5 = new Card(img5, "Анонимность ");
card5.render("card5");

let img6 = "https://images.icon-icons.com/4436/PNG/96/271083_handshake-icon.png";
let card6 = new Card(img6, "Партнерские отношения");
card6.render("card6");

let img7 = "https://images.icon-icons.com/614/PNG/96/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.png";
let card7 = new Card(img7, "Всегда на связи");
card7.render("card7");

let img8 = "https://images.icon-icons.com/2024/PNG/96/conversation_speech_balloon_chat_message_icon_123856.png";
let card8 = new Card(img8, "Общение");
card8.render("card8");

let img9 = "https://images.icon-icons.com/1993/PNG/96/banking_card_cash_credit_finance_money_payment_icon_123228.png";
let card9 = new Card(img9, "Удобные способы оплаты");
card9.render("card9");
