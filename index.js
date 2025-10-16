const optionSize = document.querySelectorAll('.option-size');
const optionKons = document.querySelectorAll('.option-kons');
const timerHome = document.getElementById("timer-home");

const litenLös = 6;
const litenMjuk = 8;
const litenHård = 10;

const mellanLös = 7;
const mellanMjuk = 9;
const mellanHård = 11;

const storLös = 8;
const storMjuk = 10;
const storHård = 12;

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
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk}:00`;
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård}:00`;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös}:00`;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk}:00`;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård}:00`;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös}:00`;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk}:00`;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård}:00`;
            }
        } else if (active.length < 2) {
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
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk}:00`;
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård}:00`;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös}:00`;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk}:00`;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård}:00`;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös}:00`;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk}:00`;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård}:00`;
            }
        } else if (activez.length < 2) {
            timerHome.textContent = "00:00";
        }
    });
});