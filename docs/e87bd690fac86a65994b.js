var quizData = [{
  "question": "Как называется стадия развития насекомых, следующая за личинкой и предшествующая имаго?",
  "options": ["Куколка", "Нимфа", "Эмбрион", "Протонимфа"],
  "correct": 0
}, {
  "question": "Какой орган дыхания характерен для большинства наземных насекомых?",
  "options": ["Жабры", "Трахеи", "Лёгкие", "Дыхальца"],
  "correct": 1
}, {
  "question": "Какое насекомое является переносчиком возбудителя малярии?",
  "options": ["Муха цеце", "Комар рода Anopheles", "Постельный клоп", "Овод"],
  "correct": 1
}, {
  "question": "Какой тип ротового аппарата характерен для бабочек?",
  "options": ["Грызущий", "Колюще-сосущий", "Сосущий (хоботок)", "Лижущий"],
  "correct": 2
}, {
  "question": "Какое насекомое демонстрирует социальную организацию с кастами (рабочие, солдаты, матка)?",
  "options": ["Термит", "Кузнечик", "Божья коровка", "Стрекоза"],
  "correct": 0
}];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var currentQuestion = 0;
var score = 0;

// Загрузка вопроса
function loadQuestion() {
  var questionData = quizData[currentQuestion];
  var optionsHtml = questionData.options.map(function (option, index) {
    return "\n      <label class=\"option\">\n        <input type=\"radio\" name=\"question\" value=\"".concat(index, "\">\n        ").concat(option, "\n      </label>\n    ");
  }).join('');
  quizContainer.innerHTML = "\n      <div class=\"question\">".concat(questionData.question, "</div>\n      <div class=\"options\">").concat(optionsHtml, "</div>\n    ");
}

// Проверка ответов
function checkAnswers() {
  var selectedOption = document.querySelector('input[name="question"]:checked');
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

// Показ результатов
function showResults() {
  var percentage = Math.round(score / quizData.length * 100);
  var message = "";
  if (percentage >= 80) message = "Отлично! Вы знаток гидрологии!";else if (percentage >= 50) message = "Хорошо, но есть куда расти!";
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  resultsContainer.innerHTML = "\n      <h2>\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(score, " \u0438\u0437 ").concat(quizData.length, " </h2>\n      <p>").concat(message, "</p>\n      <button onclick=\"location.reload()\">\u043F\u0440\u043E\u0439\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E</button>\n    ");
}

// Инициализация
loadQuestion();
submitButton.addEventListener('click', checkAnswers);