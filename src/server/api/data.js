module.exports = function (app) {

	var data = {
		getNenTypes: getNenTypes,
		getOccupations: getOccupations
	};

	return data;

	function getNenTypes(req, res) {
		res.json(["Enhancement", "Transmission", "Manipulation", "Conjuration", "Specialization"]);
	}

	function getOccupations(req, res) {
		res.json([
			{ name: "Archaeological" },
			{ name: "Beast" },
			{ name: "Blacklist" },
			{ name: "Botanical" },
			{ name: "Contract" },
			{ name: "Crime" },
			{ name: "D" },
			{ name: "Gourmet" },
			{ name: "Head" },
			{ name: "Information" },
			{ name: "Jackpot" },
			{ name: "Lost" },
			{ name: "Music" },
			{ name: "Paleograph" },
			{ name: "Poison" },
			{ name: "Poacher" },
			{ name: "Deep Sea" },
			{ name: "Temp" },
			{ name: "Terrorist" },
			{ name: "Treasure" },
			{ name: "Trouble" },
			{ name: "Virus" },
			{ name: "Youth and Beauty" }
		]);
	}
};
