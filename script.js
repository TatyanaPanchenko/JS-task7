// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
const input = document.querySelector("input");
const ul = document.querySelector("ul");
input.addEventListener("keydown", (event) => {
  const li = document.createElement("li");
  li.textContent = event.key;
  ul.append(li);
});

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const inputText = document.querySelector("input");
inputText.addEventListener("keyup", () => {
  console.log(input.value);
});

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const button = document.querySelector("button");
const inputForm = document.querySelector(".inputText");
const ulForm = document.querySelector(".list");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.textContent = inputForm.value;
  ulForm.append(li);
  inputForm.value = "";
});

// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
const calcInput1 = document.querySelector(".calculator-input1");
const calcInput2 = document.querySelector(".calculator-input2");
const select = document.querySelector("select");
const calcBtn = document.querySelector(".calculator-btn");
const result = document.querySelector(".result");
const calcForm = document.querySelector(".calculator");

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let calc;
  if (select.value === "+") {
    calc = Number(calcInput1.value) + Number(calcInput2.value);
  }
  if (select.value === "-") {
    calc = Number(calcInput1.value) - Number(calcInput2.value);
  }
  if (select.value === "*") {
    calc = Number(calcInput1.value) * Number(calcInput2.value);
  }
  if (select.value === "/") {
    calc = Number(calcInput1.value) / Number(calcInput2.value);
  }
  result.textContent = calc;
});

// 2) решить с помощью eval (https://developer.mozilla.org/...)
calcForm.addEventListener("submit", (event) => {
  event.preventDefault();
  result.innerText = eval(
    `${calcInput1.value} ${select.value} ${calcInput2.value}`
  );
});

// Задание 5
//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
const changeBtn = document.querySelector(".change-btn");
const a = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const c = Math.floor(Math.random() * 255);
const x = Math.floor(Math.random() * (180 + 180) - 180);

function randomColor(a, b, c) {
  const color = `rgb(${a},${b},${c})`;
  return color;
}
console.log(color);
function randomAngle(x) {
  const angle = `rotate(${x}deg)`;
  return angle;
}

changeBtn.addEventListener("mouseenter", () => {
  changeBtn.style.backgroundColor = randomColor(a, b, c);
});

changeBtn.addEventListener("mouseleave", () => {
  changeBtn.style.transform = randomAngle(x);
});
