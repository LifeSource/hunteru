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
	nenData: [Number],
	occupation: [String],
	abilities: [String],
	bio: String
});

hunterSchema.methods.fullName = function () {
    return this.name.first + " " + this.name.last;
};

module.exports = mongoose.model("Hunter", hunterSchema);
