var mongoose = require('mongoose');

var config = require('./config');


module.exports = function(app) {

	

	mongoose.connect(config.MONGODB_URL);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function() {

    	console.log('We are connected to mongoDB on database : ' + config.MONGODB_URL);

    	app.listen(config.EXPRESS_PORT, function() {

        	console.log('Yo Sucka we listening in on your port ' + config.EXPRESS_PORT);

   		 });
    });
}
