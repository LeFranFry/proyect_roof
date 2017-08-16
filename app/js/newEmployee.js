var mysql = require('mysql');
var dbconnection = require("./dbconnection.js");

var connection = dbconnection.start();
var id;
var name;
var lastname;
var job;

var setData = function(id, name, lastname, job){
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.job = job;
}

var query = connection.query('INSERT INTO empleado(identificacion, nombre, apellido, cargo) VALUES(?, ?, ?, ?)', [id, name, lastname, job], function(error, result){
  if(error){
    throw error;
  }else{
    console.log(result);
  }
});

module.exports = {
  setData:setData,
  query:query
}

connection.end();
