/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
(function(){
	"use strict";
	angular
		.module("app.hunter")
		.factory("hunterService", ["$http", hunterService]);

	function hunterService($http) {

		var api = "/api/hunters/";

		var service = {
			post: addHunter,
			get: getHunter,
			query: getHunters,
			update: updateHunter,
			delete: removeHunter
		};

		return service;

		function getHunter(hunterId) {
			return $http.get(api + hunterId)
			    .then(success)
				.catch(fail);
            }

		function getHunters() {
			return $http.get(api)
			    .then(success)
                .catch(fail);
		}

		function success(response) {
			return response.data;
		}

        function fail(reason) {
            return reason;
        }

		function returnResponseStatus(response) {
			return response.status;
		}

		function addHunter(hunter) {
			return $http.post(api, hunter)
				.then(success)
				.catch(fail);
		}


		function updateHunter(hunter) {
			return $http.patch(api + hunter._id, hunter)
				.then(returnResponseStatus)
				.catch(fail);
		}

		function removeHunter(hunterId) {
			return $http.delete(api + hunterId)
				.then(returnResponseStatus)
				.catch(fail);
		}
	}
})();
