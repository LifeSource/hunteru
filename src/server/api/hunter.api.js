var express = require("express"),
	mongoose = require("mongoose");

var db = mongoose.connection;
var Hunter = require("../model/hunter");

module.exports = function(app) {
	var hunterRouter = express.Router();
	
	hunterRouter.route("/")
		.get(function(req, res){
			Hunter.find(function(err, hunters){
				if (err) {
					res.status(500).send(err);
				} else {
					res.json(hunters);
				}
			});
		});
		
	hunterRouter.route("/:hunterId")
		.get(function(req, res){
			Hunter.findById(req.params.hunterId, function(err, hunter){
				if (err) {
					res.status(500).send(err);
				} else {
					res.json(hunter);
				}	
			});
		});
		
	app.use("/api/hunters/", hunterRouter);
};