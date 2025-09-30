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

/* --------- INIT --------- */
document.addEventListener("DOMContentLoaded", () => {
  footerYear.textContent = new Date().getFullYear();
  todayDisplay.textContent = new Date().toDateString();

  const goMainBtn = document.getElementById("go-main");
  if (goMainBtn) {
    goMainBtn.addEventListener("click", () => {
      window.open("https://testranking.netlify.app", "_blank");
    });
  }

  if (localStorage.getItem("theme") === "dark") {
    document.getElementById("app").classList.replace("light", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
    document.getElementById("theme-icon").textContent = "☀️";
  }

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
  const todayKey = new Date().toISOString().slice(0, 10);
  const now = new Date();
  const uniqueKey = now.toISOString().slice(0, 19); // includes seconds for randomness

  // Fetch today's used question IDs to prevent repetition
  const usedIds = JSON.parse(localStorage.getItem("dmk-used-" + todayKey) || "[]");

  // Pick a new set of random questions excluding already used ones
  dailyQuestions = pickDailyQuestions(10, usedIds);

  // Record these IDs as used for today
  const allUsed = [...usedIds, ...dailyQuestions.map(q => q.id)];
  localStorage.setItem("dmk-used-" + todayKey, JSON.stringify(allUsed));

  // Save today's generated set (for reference/debug)
  localStorage.setItem("dmk-set-" + uniqueKey, JSON.stringify(dailyQuestions));

  // Reset state
  answers = {};
  currentIndex = 0;
  timeLeft = 600;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  buildPalette();
  renderQuestion();
  switchPanel("quiz");
}

function pickDailyQuestions(count = 10, excludeIds = []) {
  // Flatten all questions from all topics
  const pool = Object.values(questionsDB).flat();

  // Filter out questions already used today
  const available = pool.filter(q => !excludeIds.includes(q.id));

  if (available.length < count) {
    console.warn("Not enough unused questions. Reusing some...");
  }

  const finalPool = available.length >= count ? available : pool;

  // Shuffle all questions using Fisher-Yates
  for (let i = finalPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [finalPool[i], finalPool[j]] = [finalPool[j], finalPool[i]];
  }

  // Pick first 'count' questions
  const selected = finalPool.slice(0, count);

  // Shuffle options for each question
  selected.forEach(q => {
    const answerIndex = q.answer;
    const options = [...q.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    // Update answer index after shuffling
    q.answer = options.findIndex(opt => opt === q.options[answerIndex]);
    q.options = options;
  });

  return selected;
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

    if (answers[currentIndex] === idx) input.checked = true;

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

  statScore.textContent = `${score} / ${dailyQuestions.length}`;
  statAttempted.textContent = attempted;
  statUnattempted.textContent = unattempted;
  statAccuracy.textContent = `${accuracy}%`;

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
      `✅ Correct: <strong>${q.options[q.answer]}</strong><br>` +
      (answers[idx] !== undefined
        ? `📝 Your Answer: ${q.options[answers[idx]]}`
        : "⏭ Not Attempted") +
      (q.explanation ? `<br><em>💡 Explanation: ${q.explanation}</em>` : "");

    div.appendChild(qEl);
    div.appendChild(ansEl);
    solutionsList.appendChild(div);
  });

  // Store today's result (keyed by date only)
  const todayKey = new Date().toISOString().slice(0, 10);
  localStorage.setItem(
    "dmk-result-" + todayKey,
    JSON.stringify({ score, attempted, unattempted, accuracy })
  );

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
