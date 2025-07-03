// script.js

const quizData = [
  {
    question: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Netscape",
    c: "Google",
    d: "Apple",
    correct: "b"
  },
  {
    question: "Inside which HTML tag do we put JavaScript?",
    a: "<js>",
    b: "<scripting>",
    c: "<script>",
    d: "<javascript>",
    correct: "c"
  },
  {
    question: "Which one is NOT a JavaScript data type?",
    a: "String",
    b: "Boolean",
    c: "Float",
    d: "Undefined",
    correct: "c"
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    a: "<script name='xxx.js'>",
    b: "<script src='xxx.js'>",
    c: "<script file='xxx.js'>",
    d: "<script link='xxx.js'>",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(el => {
    if (el.checked) answer = el.id;
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(el => el.checked = false);
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();

  if (selected) {
    if (selected === quizData[currentQuiz].correct) score++;
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById("quiz").innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Play Again</button>
      `;
    }
  }
});