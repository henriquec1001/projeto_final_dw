const ctxLinha1 = document.getElementById('lineGraph1').getContext('2d');

//Função para mostrar o gráfico da temperatura

function animar(){
// Gráfico de Linha1 - data
 fetch('temp-crud/json/tempo-temperatura.php')
    .then(res => res.json())
    .then(json => setLinha1(json))
}

 function setLinha1(stats){
    const dataLinha1 = {
        labels: stats.map(v => v.tempo),
        datasets: [
            {
                backgroundColor: 'rgba(65, 179, 249, 0.1)',
                borderColor: '#41b3f9',
                data: stats.map(v => v.temperatura)
            }
        ]
    }
    // Gráfico de Linha1 - options
    const optionsLinha1 = {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
    // Gráfico de Linha1 - config
    const configLinha1 = {
        type: 'line',
        data: dataLinha1,
        options: optionsLinha1
    }
    //Mostrar Gráfico da temperatura
    const lineChart1 = new Chart(ctxLinha1, configLinha1)

    setTimeout(animar, 5000);
}





// var jogo = document.getElementById('lineGraph1').getContext('2d');

// var jogando = new Chart(jogo, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 20, 5, 25, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

//**************************************************************************** */

// const ctxBar = document.getElementById("lineGraph1").getContext('2d')

// fetch('data/bar1.json')
//   .then(res => res.json())
//   .then(json => setBar(json))

// function setBar(stats){
//     const dataBar = {
//         labels: stats.map(v => v.mes),
//         datasets: [{
//             label: '# Reais',
//             data: stats.map(v => v.valor),
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(60, 60, 60, 0.2)',
//                 'rgba(90, 150, 16, 0.2)'

//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(60, 60, 60, 1)',
//                 'rgba(90, 150, 16, 1)'
//             ],
//             borderWidth: 1
//         }]
//     }

//     const optionsBar = {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }

//     // Gráfico de Barra - config
//     const configBar = {
//         type: 'bar',
//         data: dataBar,
//         options: optionsBar
//     }

//     const myChart = new Chart(ctxBar, configBar)
// }