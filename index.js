const optionSize = document.querySelectorAll('.option-size');
const optionKons = document.querySelectorAll('.option-kons');
const timerHome = document.getElementById("timer-home");
const startButton = document.getElementById("start-button");
const homePage = document.getElementById("home-page");
const timerPage = document.getElementById("timer-page");
const timerTimer = document.getElementById("timer-timer");
const yourSize = document.getElementById("your-size");
const yourKons = document.getElementById("your-kons");
const stopButton = document.getElementById("stop-button");

const litenLös = 6;
const litenMjuk = 8;
const litenHård = 10;

const mellanLös = 7;
const mellanMjuk = 9;
const mellanHård = 11;

const storLös = 8;
const storMjuk = 10;
const storHård = 12;

const choiceObj = {
    storlek: "",
    preferens: ""
};

startButton.style.display = "none";

optionSize.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains("active")) {
            option.classList.remove("active");
        } else {
            optionSize.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        }

        const active = document.getElementsByClassName("active");
        if (active.length === 2) {
            if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${litenLös}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Löskokt";
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Mjukkokt";
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Hårdkokt";
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Löskokt";
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Mjukkokt";
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Hårdkokt";
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Löskokt";
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Mjukkokt";
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Hårdkokt";
            }
            startButton.style.display = "flex";
        } else if (active.length < 2) {
            startButton.style.display = "none";
            timerHome.textContent = "00:00";
        }
    });
});

optionKons.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains("active")) {
            option.classList.remove("active");
        } else {
            optionKons.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        }

        const activez = document.getElementsByClassName("active");
        if (activez.length === 2) {
            if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${litenLös}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Löskokt";
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Mjukkokt";
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Hårdkokt";
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Löskokt";
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Mjukkokt";
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Hårdkokt";
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Löskokt";
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Mjukkokt";
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Hårdkokt";
            }
            startButton.style.display = "flex";
        } else if (activez.length < 2) {
            startButton.style.display = "none";
            timerHome.textContent = "00:00";
        }
    });
});

startButton.addEventListener("click", function () {
    homePage.style.display = "none";
    timerPage.style.display = "flex";
    timerTimer.textContent = timerHome.textContent;
    yourSize.textContent = choiceObj.storlek;
    yourKons.textContent = choiceObj.preferens;
})

stopButton.addEventListener("click", function () {
    timerPage.style.display = "none";
    homePage.style.display = "flex";
    optionSize.forEach(option => option.classList.contains("active") ? option.classList.remove("active") : null);
    optionKons.forEach(option => option.classList.contains("active") ? option.classList.remove("active") : null);
})