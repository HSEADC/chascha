document.addEventListener("DOMContentLoaded", function () {

const quizData = [
    {
      "question": "Как называется стадия развития насекомых, следующая за личинкой и предшествующая имаго?",
      "options": ["Куколка", "Нимфа", "Эмбрион", "Протонимфа"],
      "correct": 0
    },
    {
      "question": "Какой орган дыхания характерен для большинства наземных насекомых?",
      "options": ["Жабры", "Трахеи", "Лёгкие", "Дыхальца"],
      "correct": 1
    },
    {
      "question": "Какое насекомое является переносчиком возбудителя малярии?",
      "options": ["Муха цеце", "Комар рода Anopheles", "Постельный клоп", "Овод"],
      "correct": 1
    },
    {
      "question": "Какой тип ротового аппарата характерен для бабочек?",
      "options": ["Грызущий", "Колюще-сосущий", "Сосущий (хоботок)", "Лижущий"],
      "correct": 2
    },
    {
      "question": "Какое насекомое демонстрирует социальную организацию с кастами (рабочие, солдаты, матка)?",
      "options": ["Термит", "Кузнечик", "Божья коровка", "Стрекоза"],
      "correct": 0
    }
]
  
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
  submitButton.addEventListener('click', checkAnswers);})