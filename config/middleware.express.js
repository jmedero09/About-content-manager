var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');



module.exports = function(app) {

	app.set('publicPath', path.join(__dirname, '../', 'public'));
	app.use(express.static(path.join(__dirname, '../', 'public')));
	app.use('/libs', express.static(path.join(__dirname, '../', 'node_modules')));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));

}