const rollCounts = Array(6).fill(0);
let totalRolls = 0;
const ctx = document.getElementById('diceChart').getContext('2d');
const diceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '# of Rolls',
            data: rollCounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function rollDice() {
    rollMultipleTimes(1);
}

function rollMultipleTimes(times) {
    for (let i = 0; i < times; i++) {
        const result = Math.floor(Math.random() * 6);
        rollCounts[result]++;
        totalRolls++;
    }
    document.getElementById('totalRolls').textContent = totalRolls;
    diceChart.update();
}

document.addEventListener('DOMContentLoaded', rollDice);
