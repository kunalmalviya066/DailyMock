/* =========================================
   DMK - Daily Mock Quiz App
   Script: script.js
   ========================================= */

/* --------- STATE --------- */
let dailyQuestions = [];
let currentIndex = 0;
let answers = {}; // { qIndex: optionIndex }
let timerInterval;
let timeLeft = 600; // 10 minutes in seconds

/* --------- ELEMENTS --------- */
const homePanel = document.getElementById("home");
const quizPanel = document.getElementById("quiz");
const resultsPanel = document.getElementById("results");

const startBtn = document.getElementById("start-quiz");
const lastResultBtn = document.getElementById("view-last-result");
const backHomeBtn = document.getElementById("back-home");
const retryBtn = document.getElementById("retry-today");
const exitQuizBtn = document.getElementById("exit-quiz");

const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("question-progress");
const currentQEl = document.getElementById("current-q");

const qContent = document.getElementById("q-content");
const optionsList = document.getElementById("options-list");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const skipBtn = document.getElementById("skip-btn");
const finalSubmitBtn = document.getElementById("final-submit");

const paletteEl = document.getElementById("palette");

const statScore = document.getElementById("stat-score");
const statAttempted = document.getElementById("stat-attempted");
const statUnattempted = document.getElementById("stat-unattempted");
const statAccuracy = document.getElementById("stat-accuracy");
const solutionsList = document.getElementById("solutions-list");

const themeToggle = document.getElementById("theme-toggle");
const todayDisplay = document.getElementById("today-display");
const footerYear = document.getElementById("footer-year");

// Ensure the DOM is loaded before attaching the event
document.addEventListener("DOMContentLoaded", () => {
  const goMainBtn = document.getElementById("go-main");

  goMainBtn.addEventListener("click", () => {
    window.open("https://testranking.netlify.app", "_blank"); // opens in new tab
  });
});

/* --------- INIT --------- */
document.addEventListener("DOMContentLoaded", () => {
  footerYear.textContent = new Date().getFullYear();
  todayDisplay.textContent = new Date().toDateString();

  // Restore theme
  if (localStorage.getItem("theme") === "dark") {
    document.getElementById("app").classList.replace("light", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
    document.getElementById("theme-icon").textContent = "☀️";
  }

  // Button events
  startBtn.addEventListener("click", startQuiz);
  lastResultBtn.addEventListener("click", showLastResult);
  backHomeBtn.addEventListener("click", () => switchPanel("home"));
  retryBtn.addEventListener("click", () => switchPanel("home"));
  exitQuizBtn.addEventListener("click", () => switchPanel("home"));

  prevBtn.addEventListener("click", () => changeQuestion(-1));
  nextBtn.addEventListener("click", () => changeQuestion(1));
  skipBtn.addEventListener("click", skipQuestion);
  finalSubmitBtn.addEventListener("click", submitQuiz);

  themeToggle.addEventListener("click", toggleTheme);
});

/* --------- QUIZ LOGIC --------- */
function startQuiz() {
  // Get today's unique key
  const todayKey = new Date().toISOString().slice(0, 10);
  const savedSet = localStorage.getItem("dmk-set-" + todayKey);

  if (savedSet) {
    dailyQuestions = JSON.parse(savedSet);
  } else {
    dailyQuestions = pickDailyQuestions();
    localStorage.setItem("dmk-set-" + todayKey, JSON.stringify(dailyQuestions));
  }

  // Reset state
  answers = {};
  currentIndex = 0;
  timeLeft = 600;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  // Build palette
  buildPalette();

  // Show first question
  renderQuestion();

  // Switch panels
  switchPanel("quiz");
}

function pickDailyQuestions() {
  let pool = [];
  Object.keys(questionsDB).forEach(subject => {
    pool = pool.concat(questionsDB[subject]);
  });

  // Shuffle
  pool.sort(() => Math.random() - 0.5);

  // Pick first 10
  return pool.slice(0, 10);
}

function renderQuestion() {
  const q = dailyQuestions[currentIndex];
  currentQEl.textContent = currentIndex + 1;

  qContent.textContent = q.question;
  optionsList.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = idx;

    if (answers[currentIndex] === idx) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[currentIndex] = idx;
      updatePalette();
    });

    label.appendChild(input);
    label.append(" " + opt);
    li.appendChild(label);
    optionsList.appendChild(li);
  });

  updatePalette();
  updateNavButtons();
}

function changeQuestion(dir) {
  currentIndex += dir;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= dailyQuestions.length) currentIndex = dailyQuestions.length - 1;
  renderQuestion();
}

function skipQuestion() {
  currentIndex++;
  if (currentIndex >= dailyQuestions.length) currentIndex = dailyQuestions.length - 1;
  renderQuestion();
}

function updateNavButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === dailyQuestions.length - 1;
}

function buildPalette() {
  paletteEl.innerHTML = "";
  dailyQuestions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.textContent = idx + 1;
    btn.addEventListener("click", () => {
      currentIndex = idx;
      renderQuestion();
    });
    paletteEl.appendChild(btn);
  });
  updatePalette();
}

function updatePalette() {
  Array.from(paletteEl.children).forEach((btn, idx) => {
    btn.className = "";
    if (idx === currentIndex) btn.classList.add("active");
    if (answers[idx] !== undefined) btn.classList.add("answered");
  });
}

/* --------- TIMER --------- */
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    submitQuiz();
  }
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  timerEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
}

/* --------- SUBMIT & RESULTS --------- */
function submitQuiz() {
  clearInterval(timerInterval);

  let score = 0;
  let attempted = 0;

  dailyQuestions.forEach((q, idx) => {
    if (answers[idx] !== undefined) {
      attempted++;
      if (answers[idx] === q.answer) score++;
    }
  });

  const unattempted = dailyQuestions.length - attempted;
  const accuracy = attempted > 0 ? Math.round((score / attempted) * 100) : 0;

  // Update stats
  statScore.textContent = `${score} / ${dailyQuestions.length}`;
  statAttempted.textContent = attempted;
  statUnattempted.textContent = unattempted;
  statAccuracy.textContent = `${accuracy}%`;

  // Solutions
  solutionsList.innerHTML = "";
  dailyQuestions.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "solution-item";

    const qEl = document.createElement("div");
    qEl.className = "solution-question";
    qEl.textContent = `${idx + 1}. ${q.question}`;

    const ansEl = document.createElement("div");
    ansEl.className = "solution-answer";
    ansEl.innerHTML =
      `Correct Answer: <strong>${q.options[q.answer]}</strong><br>` +
      (answers[idx] !== undefined
        ? `Your Answer: ${q.options[answers[idx]]}`
        : "Not Attempted");

    div.appendChild(qEl);
    div.appendChild(ansEl);
    solutionsList.appendChild(div);
  });

  // Save result for later viewing
  const todayKey = new Date().toISOString().slice(0, 10);
  localStorage.setItem(
    "dmk-result-" + todayKey,
    JSON.stringify({ score, attempted, unattempted, accuracy })
  );

  // Switch panel
  switchPanel("results");
}

function showLastResult() {
  const todayKey = new Date().toISOString().slice(0, 10);
  const res = localStorage.getItem("dmk-result-" + todayKey);
  if (!res) {
    alert("No results found for today. Start the quiz first!");
    return;
  }
  const { score, attempted, unattempted, accuracy } = JSON.parse(res);
  statScore.textContent = `${score} / 10`;
  statAttempted.textContent = attempted;
  statUnattempted.textContent = unattempted;
  statAccuracy.textContent = `${accuracy}%`;
  solutionsList.innerHTML = "<p class='muted'>Solutions visible only after submitting quiz.</p>";
  switchPanel("results");
}

/* --------- THEME --------- */
function toggleTheme() {
  const app = document.getElementById("app");
  const icon = document.getElementById("theme-icon");
  if (app.classList.contains("dark")) {
    app.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    themeToggle.setAttribute("aria-pressed", "false");
    icon.textContent = "🌙";
  } else {
    app.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
    icon.textContent = "☀️";
  }
}

/* --------- UTILS --------- */
function switchPanel(name) {
  [homePanel, quizPanel, resultsPanel].forEach(p => {
    p.hidden = true;
    p.classList.remove("active");
  });

  if (name === "home") {
    homePanel.hidden = false;
    homePanel.classList.add("active");
  } else if (name === "quiz") {
    quizPanel.hidden = false;
    quizPanel.classList.add("active");
  } else if (name === "results") {
    resultsPanel.hidden = false;
    resultsPanel.classList.add("active");
  }
}
