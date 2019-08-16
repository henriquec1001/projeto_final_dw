// $(function () {
//     $('button').bind('click', function () {
//         var cidade = $('#cidade').val();
//         var now = new Date();
//         var tempURL = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '&diagnostics=true&callback=?&q=select * from weather.forecast where woeid in ( select woeid from geo.places(1) where text="' + cidade + '") and u="c"';
//         $.ajax({
//             url: encodeURI(tempURL),
//             dataType: 'json',
//             type: 'GET',
//             beforeSend: function () {
//                 $('#res').html('Carregando...');
//             },
//             sucess: function (data) {
//                 if (data !== null && data.query !== null && data.query.results !== null && data.query.results.channel.description !== 'Yahoo! Weather Error') {
//                     var temp = data.query.results.channel.item.condition.temp;
//                     $('#res').html(temp + 'º C');

//                 }

//             },
//             error: function () {
//                 $('#res').html('Erro');
//             }

//         });
//     });

// });

function getWeatherPlace(place) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=3c9275d2a8c81c0ed0cd6c03ccc5b53d/`)
        .then(res => res.json())
        .then(json => showWeather(json))
}

function showWeather(weather) {
    console.log(weather)
    // console.log(weather.weather[0].main)
}

getWeatherPlace('London,uk')