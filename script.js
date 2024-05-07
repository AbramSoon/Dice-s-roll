function rollDice() {
    const diceType = document.getElementById('dice-type').value;
    const diceCount = parseInt(document.getElementById('dice-count').value, 10);
    const modifier = parseInt(document.getElementById('modifier').value, 10);
    let totalSum = 0;
    let resultsHtml = '<ul>';

    for (let i = 0; i < diceCount; i++) {
        const result = Math.ceil(Math.random() * diceType);
        totalSum += result;
        resultsHtml += `<li>Результат ${i + 1}: ${result}</li>`;
    }

    totalSum += modifier; // Добавляем модификатор к общей сумме
    resultsHtml += `</ul><p><strong>Общая сумма с модификатором: ${totalSum}</strong></p>`;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = resultsHtml;
    resultsDiv.style.opacity = 0;
    setTimeout(() => {
        resultsDiv.style.opacity = 1;
        resultsDiv.style.transition = 'opacity 0.5s';
    }, 10);
}
