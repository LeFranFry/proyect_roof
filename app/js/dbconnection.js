var mysql = require('mysql');
var connection;

export.connection = function(){
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

export.end = function(){
  connection.end();
}
