document.getElementById('dateBtn').addEventListener('click', function () {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);
document.getElementById('dateOutput').textContent = `Today is ${formattedDate}`;
});