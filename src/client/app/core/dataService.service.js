(function() {
	"use strict";

	angular
		.module("app.core")
		.factory("dataService", dataService);

	dataService.$inject = ["$http"];

	function dataService($http) {

		var service  = {
			getNenTypes: getNenTypes,
			getOccupations: getOccupations
		};

		return service;

		function getNenTypes() {
			return $http.get("/api/nenTypes")
				.then(success)
				.catch(fail);
		}

		function getOccupations() {
			return $http.get("/api/occupations")
				.then(success)
				.catch(fail);
		}

		function success(response) {
			return response.data;
		}

		function fail(error) {
			toastr.error(error);
		}
	}
}());
