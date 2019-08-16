<?php
require_once('../read-temperatura.php');
//Cabeçário para configurar o arquivo php em json
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
//Transofrma arrya php em json e imprime
echo json_encode(tempoTemperatura());
//Exemplo: 
// "[
//     {
//         "temperatura":"784",
//         "tempo":"03:09:48"
//     },
//     {
//         "temperatura":"150",
//         "tempo":"03:09:48"
//     },
//     {
//         "temperatura":"150",
//         "tempo":"03:09:48"
//     },
//     {
//         "temperatura":"150",
//         "tempo":"03:09:48"
//     },
//     {
//         "temperatura":"150",
//         "tempo":"03:09:48"
//     },
//     {
//         "temperatura":"850",
//         "tempo":"06:00:00"
//     }
// ]" 
?>