var express = require('express');

var router = express.Router();

var controller = require('./about.controller');

router.route('/')//api/about

	.post(controller.createAbout)
	
	
	.get(controller.getAbout);
	
	//put
	//delete	

router.route('/:id')//api/about/:id
	.delete(controller.deleteAbout)
	.put(controller.editAbout)
	

module.exports = router;	