var mysql = require('mysql');
var dbconnection = require("./dbconnection.js");

var connection = dbconnection.start();
var id;
var name;
var lastname;
var job;

var setData = function(id, nombre, apellido, cargo){
  this.id = id;
  this.nombre = nombre;
  this.apellido = apellido;
  this.cargo = cargo;
}

var query = connection.query('INSERT INTO personaje(identificacion, nombre, apellido, cargo) VALUES(?, ?, ?, ?)', [id, name, lastname, job], function(error, result){
  if(error){
    throw error;
  }else{
    console.log(result);
  }
});

module.exports{
  setData:setData,
  query:query
}

connection.end();
