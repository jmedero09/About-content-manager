var Content = require('./about.model');


var controller = {};

var id=0;

controller = {
	getAbout:function(req,res,next){
		Content.find({},function(error,content){

			if(error){
				var error = new Error(err);
				error.code = 400;
				next(error);
			}else{
				console.log('this works');
				res.status(200).json(content);
			}
		});
	},
	createAbout:function(req,res,next){
		Content.create(
			{
				bio:req.body.bio,
				origin:req.body.origin,
				hobbies:req.body.hobbies,
				dreamJob:req.body.dreamJob,
				codeHistory:req.body.codeHistory,
				occupation:req.body.occupation,
				currentMusic:req.body.currentMusic
			},

				function(error,created){

					if(error){
						var error = new Error(error);
						error.code = 400;
						next(error);
					}
					else{

						res.status(200).json(created);
					}
				});
	},
	editAbout:function(req,res,next){
			Content.findByIdAndUpdate(req.params.id,

			{

				bio:req.body.bio,
				origin:req.body.origin,
				hobbies:req.body.hobbies,
				dreamJob:req.body.dreamJob,
				codeHistory:req.body.codeHistory,
				occupation:req.body.occupation,
				currentMusic:req.body.currentMusic
			},

			function(error,updated){
				if(error){
					var error = new Error(err);
					error.code = 400;
					next(error);
				}
				else{

					res.status(200).json(updated);
				}
			});
	},
	deleteAbout:function(req,res,next){

		Content.findByIdAndRemove(req.params.id,function(error){

				if(error){
					var error = new Error(err);
					error.code = 400;
					next(error);
				}
				else{
					res.json({
						message: 'Content with an id ' + req.params.id + ' has been removed!'
					})
				}

		});
	}
}

module.exports = controller;
