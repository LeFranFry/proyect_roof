var mysql = require('mysql');
var dbconnection = require("./dbconnection.js");

var connection = dbconnection.start();

var NIT;
var nombre;
var propietario;
var pais;
var Departamento;
var Municipio;
var Vereda;
var Direccion;
var telefono;
//Valores de prueba para comprobar la inserción de un nuevo registro en la tabla Finca
//Serán eliminado una vez avance con la parte del front
var query = connection.query("INSERT INTO Finca(NIT, nombre, propietario, pais, Departamento, Municipio, Verda, Direccion, Telefono) VALUES(2, 'hope', 'Daniel', 'Colombia', 'Cundinamarca', 'Susa', 'SanJose', 'si', '7775428')", function(error, result){
  if(error){
    throw error;
  }else{
    console.log(result);
  }
});

//employee.setData(id, name, lastname, job);
//employee.query;
