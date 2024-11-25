var menu = {
    "Пицца": 20,
    "Суши": 10,
    "Кофе": 5,
    "Фри": 1
};

alert("Мәзір: \n Пицца – 20 USD \n Суши – 10 USD \n Кофе – 5 USD \n Фри – 1 USD");

var order = prompt("Қандай тапсырыс жасайсыз?");
var priceUsd;

if (order == "Пицца") {
    priceUsd = 20;
} else if (order == "Суши" || order == "суши") {
    priceUsd = 10;
} else if (order == "Кофе" || order == "кофе") {
    priceUsd = 5;
} else if (order == "Фри"  || order == "фри") {
    priceUsd = 1;
} else {
    alert("Мәзірде ондай тапсырыс жоқ.");
}

var currency = prompt("Төлем жасайтын валюта (USD, KZT, CNY): ");
var price;

if (currency == "USD") {
    price = priceUsd;
} else if (currency == "KZT") {
    price = priceUsd * 500;
} else if (currency == "CNY") {
    price = priceUsd * 7;
} else {
    alert("Қате! Төлем жасау үшін қолжетімді валюта: USD, KZT, CNY.");
}

var balanceInput = +prompt("Шотыңызда қанша " + currency + " бар?");

if (balance >= price) {
    balance -= price;
    alert(order + " сатып алынды. Қалған қаражат: " + balance + " " + currency);
} else {
    alert("Шотыңызда қаражат жеткіліксіз.");
}
