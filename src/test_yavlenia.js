const quizData = [
    {
      question: "1/5 Какое атмосферное явление возникает из-за электрических разрядов в кучево-дождевых облаках?",
      options: ["Полярное сияние", "Молния", "Гало", "Мираж"],
      correct: 1 // (б) Молния
    },
    {
      question: "2/5 Как называется процесс вертикального подъёма глубинных вод океана, богатых питательными веществами?",
      options: ["Апвеллинг", "Эрозия", "Конденсация", "Сублимация"],
      correct: 0 // (а) Апвеллинг
    },
    {
      question: "3/5 Какое геологическое явление сопровождается выбросом магмы, пепла и газов на поверхность Земли?",
      options: ["Землетрясение", "Цунами", "Вулканизм", "Оползень"],
      correct: 2 // (в) Вулканизм
    },
    {
      question: "4/5 Какой термин описывает длительный период аномально высоких температур и засухи?",
      options: ["Паводок", "Смерч", "Заморозки", "Засуха"],
      correct: 3 // (г) Засуха
    },
    {
      question: "5/5 Какое оптическое явление образуется при преломлении солнечного света в каплях воды?",
      options: ["Радуга", "Мираж", "Гало", "Зарница"],
      correct: 0 // (а) Радуга
    }
]
  
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
  
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `
      <h2>Ваш результат: ${score} из ${quizData.length} </h2>
      <p>${message}</p>
      <button onclick="location.reload()">пройти заново</button>
    `;
  }
  
  // Инициализация
  loadQuestion();
  submitButton.addEventListener('click', checkAnswers);