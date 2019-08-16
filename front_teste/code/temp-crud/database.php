    
<?php
require_once('config.php'); //Colocando as variáveis de config.php aqui
function connect(){ //Criando a função connect
  $dsn = DB.":dbname=".DBNAME.";host=".DBHOST; //Juntando as strings com as variáveis de config.php para formar apenas uma string
  try { //tenta primeiro executar esse o código dentro dele
    return new PDO($dsn, DBUSER, DBPWD); //Cria um objeto PDO, no qual contém, a string criada nessa função, depois as duas varáveis que estão em config.php
  } catch (PDOException $e) { //Caso dê errado no try, ele entra aqui e o erro é colocado na string $e
    echo 'Connection failed: ' . $e->getMessage(); // Imprime primeiro que a conexão falhou, depois imprime a causa do erro
  }
}