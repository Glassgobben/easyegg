const optionSize = document.querySelectorAll('.option-size');
const optionKons = document.querySelectorAll('.option-kons');
const timerHome = document.getElementById("timer-home");
const startButton = document.getElementById("start-button");
const homePage = document.getElementById("home-page");
const timerPage = document.getElementById("timer-page");
const timerTimer = document.getElementById("timer-timer");
const stopButton = document.getElementById("stop-button");
const timerChoices = document.getElementById("choices");
const tipsButton = document.getElementById("tips-button");
const tipsPage = document.getElementById("tips-page");
const homeButton = document.getElementById("home-button");
const tipsMenu = document.getElementById("tips-menu");
const tipsItem = document.querySelectorAll(".tips-item");
const tipsDesc = document.getElementById("tips-desc");
const tipsContent = document.getElementById("tips-content");
const obsText = document.getElementById("obs");

const litenLös = {
    minutes: 6,
    seconds: 360
};
const litenMjuk = {
    minutes: 8,
    seconds: 480
};
const litenHård = {
    minutes: 10,
    seconds: 600
};

const mellanLös = {
    minutes: 7,
    seconds: 420
};
const mellanMjuk = {
    minutes: 9,
    seconds: 540
};
const mellanHård = {
    minutes: 11,
    seconds: 660
};

const storLös = {
    minutes: 8,
    seconds: 480
};
const storMjuk = {
    minutes: 10,
    seconds: 600
};
const storHård = {
    minutes: 12,
    seconds: 720
};

const choiceObj = {
    storlek: "",
    preferens: "",
    seconds: ""
};

const tipsObj = [{
    title: "Vänta",
    description: "Riktigt färska ägg är absolut svårast att skala. I ett nyvärpt ägg är pH-värdet lägre med hinnor som klistrar sig fast vid skalet. Men efter ett par dagar tränger luft in i ägget som får hinnorna att separera och tjockna. Så låt gärna dina nyköpta ägg stå i kylen i en vecka innan det är dags att tillreda påskmaten"
},
{
    title: "Kyl äggen",
    description: "Ägg som kyls länge efter att de har kokats blir enklare att skala. Lägg därför äggen i kallt vatten när de är färdigkokta och låt de ligga länge tills de är ordentligt kalla."
},
{
    title: "Koka först",
    description: "Koka upp vattnet och lägg därefter i äggen i det sjudande vattnet – på det här sättet fastnar inte äggvitan i skalet och du kan enkelt skala dem!"
},
{
    title: "Skaka",
    description: "En riktigt bra metod när du ska servera många ägg. Efter kokningen lägger du äggen i en kastrull (eller skål) med  kallt vatten. Använd ett lock för att göra det lite enklare. Skaka och skala under rinnande vatten."
},
{
    title: "Bakpulver",
    description: "Bakpulver är en alkalisk substans som höjer äggens pH-värde och gör dem enklare att skala. Addera en tesked i vattnet och koka äggen som vanligt. Börja skala när äggen svalnat ordentligt. Du kan även tillsätta bakpulvret efter kokningen. Låt äggen dra i ett kallt vattenbad och häll över lite bakpulver. Vänta upp till fem minuter och skala därefter."
}
];

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
                timerHome.textContent = `0${litenLös.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = litenLös.seconds;
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = litenMjuk.seconds;
            } else if ((active[0].textContent === "Liten" || active[1].textContent === "Liten") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = litenHård.seconds;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = mellanLös.seconds;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = mellanMjuk.seconds;
            } else if ((active[0].textContent === "Mellan" || active[1].textContent === "Mellan") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = mellanHård.seconds;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Löskokt" || active[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = storLös.seconds;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Mjukkokt" || active[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = storMjuk.seconds;
            } else if ((active[0].textContent === "Stor" || active[1].textContent === "Stor") && (active[0].textContent === "Hårdkokt" || active[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = storHård.seconds;
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
                timerHome.textContent = `0${litenLös.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = litenLös.seconds;
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${litenMjuk.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = litenMjuk.seconds;
            } else if ((activez[0].textContent === "Liten" || activez[1].textContent === "Liten") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${litenHård.minutes}:00`;
                choiceObj.storlek = "Liten";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = litenHård.seconds;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${mellanLös.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = mellanLös.seconds;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `0${mellanMjuk.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = mellanMjuk.seconds;
            } else if ((activez[0].textContent === "Mellan" || activez[1].textContent === "Mellan") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${mellanHård.minutes}:00`;
                choiceObj.storlek = "Mellan";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = mellanHård.seconds;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Löskokt" || activez[1].textContent === "Löskokt")) {
                timerHome.textContent = `0${storLös.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Löskokt";
                choiceObj.seconds = storLös.seconds;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Mjukkokt" || activez[1].textContent === "Mjukkokt")) {
                timerHome.textContent = `${storMjuk.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Mjukkokt";
                choiceObj.seconds = storMjuk.seconds;
            } else if ((activez[0].textContent === "Stor" || activez[1].textContent === "Stor") && (activez[0].textContent === "Hårdkokt" || activez[1].textContent === "Hårdkokt")) {
                timerHome.textContent = `${storHård.minutes}:00`;
                choiceObj.storlek = "Stor";
                choiceObj.preferens = "Hårdkokt";
                choiceObj.seconds = storHård.seconds;
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

    const yourSize = document.createElement("div");
    yourSize.setAttribute("id", "your-size");
    yourSize.textContent = choiceObj.storlek;
    timerChoices.append(yourSize);
    const yourKons = document.createElement("div");
    yourKons.setAttribute("id", "your-kons");
    yourKons.textContent = choiceObj.preferens;
    timerChoices.append(yourKons);
    startTimer();
    timerChoices.style.display = "flex";

})

stopButton.addEventListener("click", function () {
    timerPage.style.display = "none";
    homePage.style.display = "flex";
    optionSize.forEach(option => option.classList.contains("active") ? option.classList.remove("active") : null);
    optionKons.forEach(option => option.classList.contains("active") ? option.classList.remove("active") : null);
    timerChoices.innerHTML = "";
    startButton.style.display = "none";
    timerHome.textContent = "00:00";
    stopButton.textContent = "Stop";

    choiceObj.storlek = "";
    choiceObj.preferens = "";
    choiceObj.seconds = "";
})

let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = 3 //choiceObj.seconds;

    timerInterval = setInterval(() => {
        if (timeLeft == 0) {
            clearInterval(timerInterval);
            timerTimer.textContent = "Klar";
            stopButton.textContent = "Ok";
            timerChoices.innerHTML = "";

            const div = document.createElement("div");
            div.textContent = "Smaklig måltid!";
            timerChoices.append(div);
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerTimer.textContent =
                `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
    }, 1000);
}

tipsButton.addEventListener("click", function () {
    homePage.style.display = "none";
    tipsPage.style.display = "flex";
})

homeButton.addEventListener("click", function () {
    tipsPage.style.display = "none";
    homePage.style.display = "flex";
    tipsItem.forEach(i => { i.style.justifyContent = "center"; });
    tipsMenu.style.alignItems = "center";
    tipsContent.style.justifyContent = "center";
    tipsDesc.style.display = "none";
    tipsItem.forEach(item => item.classList.contains("tips-active") ? item.classList.remove("tips-active") : null)
    if (obsText.textContent != "Välj ett tips för att visa mer") {
        obsText.textContent = "Välj ett tips för att visa mer";
    }
})

tipsItem.forEach(item => item.addEventListener("click", function () {
    tipsMenu.style.alignItems = "flex-start";
    tipsItem.forEach(i => { i.style.justifyContent = "flex-start"; });

    tipsItem.forEach(t => t.classList.remove('tips-active'));
    item.classList.add('tips-active');

    tipsContent.style.justifyContent = "flex-start";
    tipsDesc.style.display = "flex";
    tipsObj.find(tips => (tips.title === item.textContent) ? tipsDesc.textContent = tips.description : null);

    if (obsText.textContent = "Välj ett tips för att visa mer") {
        obsText.textContent = "OBS! Tipsen fungerar var för sig, inte i ordning";
    }
}))