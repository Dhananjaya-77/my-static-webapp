const dateBtn = document.getElementById('dateBtn');
const timeBtn = document.getElementById('timeBtn');
const quoteBtn = document.getElementById('quoteBtn');
const themeToggle = document.getElementById('themeToggle');
const dateOutput = document.getElementById('dateOutput');
const timeOutput = document.getElementById('timeOutput');
const quoteOutput = document.getElementById('quoteOutput');

const quotes = [
    '“The best way to predict the future is to build it.”',
    '“Success is the sum of small efforts, repeated day in and day out.”',
    '“Learning is the first step to creating something meaningful.”',
    '“Cloud skills open doors to ideas that scale beyond your imagination.”'
];

let quoteIndex = 0;

function showDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);
    dateOutput.textContent = `Today is ${formattedDate}`;
}

function showTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    timeOutput.textContent = `Current time: ${formattedTime}`;
}

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteOutput.textContent = quotes[quoteIndex];
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

dateBtn.addEventListener('click', showDate);
timeBtn.addEventListener('click', showTime);
quoteBtn.addEventListener('click', changeQuote);
themeToggle.addEventListener('click', toggleTheme);

initializeTheme();
showDate();
showTime();
changeQuote();