var aboutRouter = require('../api/about/about.router');

var path = require('path');


module.exports = function(app){
	app.use('/api/about',aboutRouter);

	app.get('*', function (req, res, next) {
		var error = new Error('That endpoint cannot be found!');
		error.code = 404;
		next(error);
	});

	require('./error.express')(app);
};