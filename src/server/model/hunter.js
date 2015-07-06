var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var hunterSchema = new Schema({
	name: {
		first: String,
		last: String
	},
	age: Number,
	gender: String,
	nen: [String],
	occupation: [String],
	abilities: [String]
});

module.exports = mongoose.model("Hunter", hunterSchema);