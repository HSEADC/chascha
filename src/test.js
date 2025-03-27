
const quizData = [
  {
    question: "1/5 Как называется участок реки с быстрым течением и небольшими глубинами, образованный выходом твердых пород?",
    options: ["Пойма", "Плес", "Перекат", "Старица"],
    correct: 2 
  },
  {
    question: "2/5 Какое озеро является самым глубоким в мире?",
    options: ["Каспийское море", "Озеро Байкал", "Озеро Танганьика", "Озеро Верхнее"],
    correct: 1 
  },

  {
    question: "3/5 Как называется река, которая впадает в другую реку, а не в море или озеро?",
    options: ["Главная река", "Приток", "Водораздел", "Дельта"],
    correct: 1 

  },
  {
    question: "4/5 Какая река является самой длинной в мире?",
    options: ["Нил", "Амазонка", "Янцзы", "Миссисипи"],
    correct: 1 
  },
  {
    question: "5/5 Как называется озеро, образовавшееся в кратере потухшего вулкана?",
    options: ["Ледниковое", "Карстовое", "Тектоническое", "Кальдера"],
    correct: 3 
  }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let currentQuestion = 0;
let score = 0;


function loadQuestion() {
  const questionData = quizData[currentQuestion];
  const optionsHtml = questionData.options.map((option, index) => `
    <label class="option">
      <input type="radio" name="question" value="${index}">
      ${option}
    </label>
  `).join('');

  quizContainer.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="options">${optionsHtml}</div>
  `;
}


function checkAnswers() {
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (!selectedOption) {
    alert("Выберите ответ!");
    return;
  }

  if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}


function showResults() {
  const percentage = Math.round((score / quizData.length) * 100);
  let message = "";
  if (percentage >= 80) message = "Отлично! Вы знаток гидрологии!";
  else if (percentage >= 50) message = "Хорошо, но есть куда расти!";

  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  resultsContainer.innerHTML = `
    <h2>Ваш результат: ${score} из ${quizData.length} </h2>
    <p>${message}</p>
    <button onclick="location.reload()">пройти заново</button>
  `;
}


loadQuestion();
submitButton.addEventListener('click', checkAnswers);
