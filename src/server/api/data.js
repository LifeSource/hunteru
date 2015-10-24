module.exports = function () {

	var data = {
		getNenTypes: getNenTypes,
		getOccupations: getOccupations
	};

	return data;

	function getNenTypes(req, res) {
		res.json(["Enhancer", "Transmutter", "Conjurer", "Specialist", "Manipulator", "Emitter"]);
	}

	function getOccupations(req, res) {
		res.json([
			"Archaeological",
			"Assassin",
			"Beast",
			"Blacklist",
			"Botanical",
			"Contract",
			"Crime",
			"D",
			"Gourmet",
			"Hacker",
			"Head",
			"Information",
			"Jackpot",
			"Lost",
			"Music",
			"Paleograph",
			"Poison",
			"Poacher",
			"Deep Sea",
			"Temp",
			"Terrorist",
			"Treasure",
			"Trouble",
			"Virus",
			"Youth and Beauty"
		]);
	}
};
