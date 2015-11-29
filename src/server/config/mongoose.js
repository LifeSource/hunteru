var mongoose = require("mongoose");

var Hunter = require("../models/hunter"),
	seedData = require("../models/seedData");

module.exports = function(env) {

	switch (env) {
	    case 'production':
            mongoose.connect("mongodb://gon:#hyegyo86kW@ds045064.mongolab.com:45064/hunteru");
	        break;
	    default:
	        mongoose.connect("mongodb://localhost/hunteru");
	        break;
	}

	var database = mongoose.connection;

	database.on("error", console.error.bind(console, "Connection error...."));
	database.once("open", function(){
		console.log("Hunteru database connection opened...");
        seedDatabase();
	});

	function seedDatabase() {
		Hunter.find().exec(function(err, hunters){
			if (hunters.length === 0) {
				console.log("\tSeeding the hunteru database...");
				database.collection("hunters").insert(seedData.hunters);
			} else {
				console.log("database already seeded");
			}
		});
	}
};
