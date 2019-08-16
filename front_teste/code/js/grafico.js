var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Norte', 'Sul', 'Sudeste', 'Nordeste', 'Centro-Oeste'],
        datasets: [{
            label: 'Regiões mais quentes',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(123, 12, 225)',
            data: [2, 3, 5, 10, 5]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});

function oi(){
    console.log("Ola");
}