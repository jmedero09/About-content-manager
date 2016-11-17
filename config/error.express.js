module.exports = function (app) {
	app.use(function (err, req, res, next) {

		if (err.code === 404) {
            
			res.status(err.code).json({
				error: err.message,
				status: err.code
			});

		} else if (err.code === 500) {

			res.status(err.code).json({
				error: err.message,
				status: err.code
			});

		} else if(err.code === 400) {
            	res.status(err.code).json({
				error: err.message,
				status: err.code
			});
        }

	});
}