document.addEventListener('DOMContentLoaded', () => {
  const tokenExpire = localStorage.getItem('tokenExpire');
  const storedKey = localStorage.getItem('userToken');

  if (!storedKey || !tokenExpire || new Date() >= new Date(tokenExpire)) {
    document.getElementById('activation-popup').style.display = 'flex';
    document.querySelector('main').hidden = true; // hide main quiz until validated

    // Pre-fill user info if previously entered
    const user = JSON.parse(localStorage.getItem('activationUser')) || {};
    if(user.name) document.getElementById('user-name').value = user.name;
    if(user.email) document.getElementById('user-email').value = user.email;
    if(user.mobile) document.getElementById('user-mobile').value = user.mobile;
  } else {
    document.getElementById('activation-popup').style.display = 'none';
    document.querySelector('main').hidden = false;
  }
});

// Step 1: Collect User Details
document.getElementById('step1-next').addEventListener('click', () => {
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const mobile = document.getElementById('user-mobile').value.trim();

  if(!name || !email || !mobile) return alert("Please fill all fields!");

  // Persist user info in localStorage
  localStorage.setItem('activationUser', JSON.stringify({ name, email, mobile }));

  document.getElementById('step1').hidden = true;
  document.getElementById('step2').hidden = false;

  // Generate tasks only if not already present
  if(!localStorage.getItem('activationTasks')) generateTasks();
});

// Step 2: Generate Random Tasks
function generateTasks() {
  const container = document.getElementById('task-container');
  container.innerHTML = '';

  const user = JSON.parse(localStorage.getItem('activationUser'));

  const taskPool = [
    { question: 'Solve 5 + 7 = ?', answer: '12' },
    { question: 'Solve 8 x 3 = ?', answer: '24' },
    { question: 'Enter the first letter of your name', answer: user.name[0].toUpperCase() },
    { question: 'Type the last digit of your mobile number', answer: user.mobile.slice(-1) },
    { question: 'What is 15 - 6?', answer: '9' },
    { question: 'What is 7 + 6?', answer: '13' },
    { question: 'Enter the number of letters in your name', answer: user.name.length.toString() },
    { question: 'Solve 9 ÷ 3 = ?', answer: '3' }
  ];

  // Pick 3 random tasks
  const tasks = taskPool.sort(() => 0.5 - Math.random()).slice(0,3);

  tasks.forEach((t, idx) => {
    const div = document.createElement('div');
    div.innerHTML = `<p>${t.question}</p><input type="text" id="task-${idx}" />`;
    container.appendChild(div);
  });

  localStorage.setItem('activationTasks', JSON.stringify(tasks));
}

// Step 2 Next: Validate Tasks
document.getElementById('step2-next').addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('activationTasks'));
  let allCorrect = true;

  tasks.forEach((t, idx) => {
    const ans = document.getElementById(`task-${idx}`).value.trim();
    if(ans !== t.answer) allCorrect = false;
  });

  if(!allCorrect) return alert("Some tasks are incorrect. Please try again.");

  document.getElementById('step2').hidden = true;
  document.getElementById('step3').hidden = false;

  const key = generateRandomKey();
  document.getElementById('generated-key').textContent = key;

  // Store key and expiry
  localStorage.setItem('userToken', key);
  localStorage.setItem('tokenExpire', new Date(Date.now() + 7*24*60*60*1000).toISOString());
});

// Generate Random Key
function generateRandomKey(length = 15){
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let key = '';
  for(let i=0;i<length;i++) key += chars.charAt(Math.floor(Math.random()*chars.length));
  return key;
}

// Copy Key
document.getElementById('copy-key').addEventListener('click', () => {
  const key = document.getElementById('generated-key').textContent;
  navigator.clipboard.writeText(key);
  alert("Key copied to clipboard!");
});

// Validate Key
document.getElementById('validate-key').addEventListener('click', () => {
  const storedKey = localStorage.getItem('userToken');
  if(storedKey) {
    alert("Activation Successful! You can now use DMK.");
    document.getElementById('activation-popup').style.display = 'none';
    document.querySelector('main').hidden = false;

    // Optional: clean up tasks to avoid repeated Step 2 display
    localStorage.removeItem('activationTasks');
  }
});
