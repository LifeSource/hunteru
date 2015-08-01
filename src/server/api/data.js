module.exports = function (app) {

	var data = {
		getNenTypes: getNenTypes,
		getOccupations: getOccupations
	};

	return data;

	function getNenTypes(req, res) {
		res.json([ "Enhancement", "Transmission", "Manipulation", "Conjuration", "Specialization" ]);
	}

	function getOccupations(req, res) {
		res.json([

		]);
	}
};
