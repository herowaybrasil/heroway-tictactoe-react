const defaultMessages = [
  "Responde tudo, gostaria que você me respondesse qual é a",
  "Por favor, será que você poderia me responder qual é a",
  "Eu gostaria de saber uma informação, você pode me ajudar? Qual é a",
];

const random = Math.floor(Math.random() * defaultMessages.length);
const message = defaultMessages[random];

// ----- //

let counter = 0;
let ctrlWasPressed = false;
let answer = "";

const inputEl = document.getElementById("input");
inputEl.addEventListener("keydown", (event) => {
  if (event.code === 'ShiftLeft') return;

  if (event.ctrlKey) {
    ctrlWasPressed = true;
  }

  if (!ctrlWasPressed) {
    event.preventDefault();

    answer = answer + event.key;
    event.target.value = message.slice(0, counter);
    counter++;
  }
});

// ----- //

const buttonEl = document.getElementById("button");
const answerEl = document.getElementById("answer");
button.addEventListener("click", () => {
  answerEl.innerHTML = `Sua resposta é: <div>${answer}</div>`;
});
