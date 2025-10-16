const optionSize = document.querySelectorAll('.option-size');
const optionKons = document.querySelectorAll('.option-kons');

optionSize.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains("active")) {
            option.classList.remove("active");
        } else {
            optionSize.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
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
    });
});

const litenLös = 6;
const litenMjuk = 8;
const litenHård = 10;

const mellanLös = 7;
const mellanMjuk = 9;
const mellanHård = 11;

const storLös = 8;
const storMjuk = 10;
const storHård = 12;