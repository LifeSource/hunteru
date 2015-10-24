var express = require("express"),
	mongoose = require("mongoose");

var db = mongoose.connection;

module.exports = function() {

	var hunterRouter = express.Router(),
	    hunterController = require("../controllers/hunter.server.controller")();
	
	hunterRouter.route("/")
		.get(hunterController.query)
		.post(hunterController.post);

    hunterRouter.use("/:id", hunterController.use);
		
	hunterRouter.route("/:id")
	    .get(hunterController.get)
	    .put(hunterController.put)
	    .patch(hunterController.patch)
	    .delete(hunterController.remove);

    return hunterRouter;

};
