const quizData = [
    {
      question: "1. Как называется участок реки с быстрым течением и небольшими глубинами, образованный выходом твердых пород?",
      options: ["а) Пойма", "б) Плес", "в) Перекат", "г) Старица"],
      correct: 2 // Индекс правильного ответа (в) Перекат)
    },
    {
      question: "2. Какое озеро является самым глубоким в мире?",
      options: ["а) Каспийское море", "б) Озеро Байкал", "в) Озеро Танганьика", "г) Озеро Верхнее"],
      correct: 1 // (б) Озеро Байкал)
    },
    {
      question: "3. Как называется река, которая впадает в другую реку, а не в море или озеро?",
      options: ["а) Главная река", "б) Приток", "в) Водораздел", "г) Дельта"],
      correct: 1 // (б) Приток)
    },
    {
      question: "4. Какая река является самой длинной в мире?",
      options: ["а) Нил", "б) Амазонка", "в) Янцзы", "г) Миссисипи"],
      correct: 1 // (б) Амазонка)
    },
    {
      question: "5. Как называется озеро, образовавшееся в кратере потухшего вулкана?",
      options: ["а) Ледниковое", "б) Карстовое", "в) Тектоническое", "г) Кальдера"],
      correct: 3 // (г) Кальдера)
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  let currentQuestion = 0;
  let score = 0;
  
  // Загрузка вопроса
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
  
  // Проверка ответов
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
  
  // Показ результатов
  function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    let message = "";
    if (percentage >= 80) message = "Отлично! Вы знаток гидрологии!";
    else if (percentage >= 50) message = "Хорошо, но есть куда расти!";
    else message = "Попробуйте ещё раз!";
  
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `
      <h2>Ваш результат: ${score} из ${quizData.length} (${percentage}%)</h2>
      <p>${message}</p>
      <button onclick="location.reload()">Пройти тест снова</button>
    `;
  }
  
  // Инициализация
  loadQuestion();
  submitButton.addEventListener('click', checkAnswers);