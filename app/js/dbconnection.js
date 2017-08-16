var mysql = require('mysql');
var connection;

exports.start = function(){
  //Aca va la informacion de conexion a la db.
  connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '1234',
     database: 'mydb',
     port: 3306
  });
  connection.connect(function(error){
     if(error){
        throw error;
     }else{
        console.log('Conexion correcta.');
     }
  });
  return connection;
}
//Nota: Cada vez que llamen este módulo, no olviden cerrar la Conexion
