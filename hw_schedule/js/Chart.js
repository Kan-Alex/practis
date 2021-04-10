let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['UAH', 'EUR', 'CNY', 'USD', 'GBP', 'RUB'],
        datasets: [{
            label: 'rate relative to UAH',
            data: [1, 33.83, 4.31, 27.83, 38.75, 0.38],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});