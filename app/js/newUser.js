var mysql = require('mysql');
var dbconnection = require("./dbconnection.js");
var employee = require("./newEmployee.js");

var connection = dbconnection.start();

var id;
var password;
var name;
var lastname;
var job;

var query = connection.query('INSERT INTO personaje(identificacion, contraseña) VALUES(?, ?)', [id, password], function(error, result){
  if(error){
    throw error;
  }else{
    console.log(result);
  }
});

employee.setData(id, name, lastname, job);
employee.query;
