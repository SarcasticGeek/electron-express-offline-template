// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// var shell = require('shelljs');
// shell.config.execPath = (shell.which('node').toString());
// shell.exec('node --version');


let $ = require("jquery")
const axios = require('axios')

async function getData(){
     return await axios.get('http://localhost:3030/getData')
    .then(function (response) {
        console.log(response);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}
var response_from_express = getData().then(function (data) {
    $('#app').html('<p>'+JSON.stringify(data)+'</p>');
});


