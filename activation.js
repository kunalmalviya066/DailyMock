document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('activation-popup');
  const main = document.querySelector('main');

  // Token Check
  const tokenExpire = localStorage.getItem('tokenExpire');
  const storedKey = localStorage.getItem('userToken');

  if (!storedKey || !tokenExpire || new Date() >= new Date(tokenExpire)) {
    popup.style.display = 'flex';
    main.hidden = true;

    const user = JSON.parse(localStorage.getItem('activationUser') || '{}');
    if (user.name) document.getElementById('user-name').value = user.name;
    if (user.email) document.getElementById('user-email').value = user.email;
    if (user.mobile) document.getElementById('user-mobile').value = user.mobile;
  } else {
    popup.style.display = 'none';
    main.hidden = false;
  }

  // === STEP 1 ===
  document.getElementById('step1-next').addEventListener('click', () => {
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const mobile = document.getElementById('user-mobile').value.trim();

    if (!name || !email || !mobile) return alert("Please fill all fields!");

    localStorage.setItem('activationUser', JSON.stringify({ name, email, mobile }));

    document.getElementById('step1').hidden = true;
    document.getElementById('step2').hidden = false;

    if (!localStorage.getItem('activationTasks')) generateTasks();
  });
                            
  // === STEP 2 ===
  function generateTasks() {
    const container = document.getElementById('task-container');
    container.innerHTML = '';

    const user = JSON.parse(localStorage.getItem('activationUser') || '{}');
    const taskPool = [
      { q: 'Solve 5 + 7 = ?', a: '12' },
      { q: 'What is 6 × 9?', a: '54' },
      { q: 'Enter the first letter of your name', a: user.name[0].toUpperCase() },
      { q: 'Enter the last two digits of your mobile', a: user.mobile.slice(-2) },
      { q: 'How many letters in your email (before @)?', a: user.email.split('@')[0].length.toString() },
      { q: 'Solve 15 ÷ 3 = ?', a: '5' },
      { q: 'Enter the total characters in your name', a: user.name.replace(/\s+/g, '').length.toString() },
      { q: 'Solve 3² + 2 = ?', a: '11' }
    ];

    const tasks = taskPool.sort(() => 0.5 - Math.random()).slice(0, 3);

    tasks.forEach((t, i) => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${t.q}</p><input type="text" id="task-${i}" />`;
      container.appendChild(div);
    });

    localStorage.setItem('activationTasks', JSON.stringify(tasks));
  }

  document.getElementById('step2-next').addEventListener('click', () => {
    const tasks = JSON.parse(localStorage.getItem('activationTasks') || '[]');
    let allCorrect = true;

    tasks.forEach((t, i) => {
      const ans = document.getElementById(`task-${i}`).value.trim();
      if (ans !== t.a) allCorrect = false;
    });

    if (!allCorrect) return alert("Some answers are incorrect. Try again.");

    document.getElementById('step2').hidden = true;
    generateVerification();
  });

  // === STEP 3 ===
  function generateVerification() {
    const verifyQ = document.getElementById('verify-question');
    const now = new Date();
    const challenges = [
      { q: "What is today's date (DD)?", a: now.getDate().toString() },
      { q: "Enter current year", a: now.getFullYear().toString() },
      { q: "Solve 10 + current month number", a: (10 + (now.getMonth() + 1)).toString() },
      { q: "Type the word 'ACTIVATE' backwards", a: 'ETAVITCA' }
    ];

    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    verifyQ.textContent = challenge.q;
    localStorage.setItem('verifyChallenge', JSON.stringify(challenge));

    document.getElementById('step3').hidden = false;
  }

  document.getElementById('step3-next').addEventListener('click', () => {
    const challenge = JSON.parse(localStorage.getItem('verifyChallenge') || '{}');
    const ans = document.getElementById('verify-answer').value.trim();

    if (ans !== challenge.a) return alert("Incorrect verification answer!");

    document.getElementById('step3').hidden = true;
    showFinalKey();
  });

  // === STEP 4 ===
  function showFinalKey() {
    document.getElementById('step4').hidden = false;

    const key = generateComplexKey();
    document.getElementById('generated-key').textContent = key;

    localStorage.setItem('userToken', key);
    localStorage.setItem('tokenExpire', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString());
  }

  function generateComplexKey() {
    const user = JSON.parse(localStorage.getItem('activationUser') || '{}');
    const base = `${user.name}-${user.email}-${user.mobile}-${Date.now()}`;
    const salt = crypto.getRandomValues(new Uint8Array(6));
    const saltHex = Array.from(salt).map(b => b.toString(16)).join('');
    const hash = btoa(base).replace(/[^A-Z0-9]/gi, '').slice(0, 10);
    return `DMK-${hash}-${saltHex}`.toUpperCase();
  }

  document.getElementById('copy-key').addEventListener('click', () => {
    const key = document.getElementById('generated-key').textContent;
    navigator.clipboard.writeText(key);
    alert("Key copied to clipboard!");
  });

  document.getElementById('validate-key').addEventListener('click', () => {
    const key = localStorage.getItem('userToken');
    if (key) {
      alert("✅ Activation Successful! Welcome to DMK.");
      popup.style.display = 'none';
      main.hidden = false;
      localStorage.removeItem('activationTasks');
      localStorage.removeItem('verifyChallenge');
    } else {
      alert("Activation failed. Try again.");
    }
  });
});
