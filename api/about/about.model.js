var mongoose = require('mongoose');


var contentSchema = new mongoose.Schema({

	bio:{
		type:String,
		required:true,
	},
	origin:{
		type:String,
		required:true,
	},
	hobbies:{
		type:String,
		required:true,
	},
	dreamJob:{
		type:String,
		required:true,
	},
	codeHistory:{
		type:String,
		required:true,
	},
	occupation:{
		type:String,
		required:true,
	},
	currentMusic:{
		type:String,
		required:true,
	}

});

module.exports = mongoose.model('Content',contentSchema);