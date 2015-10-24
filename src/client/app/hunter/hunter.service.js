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
			remove: removeHunter
		};

		return service;

		function getHunter(hunterId) {
			return $http.get(api + hunterId)
			    .then(function(response){
                    return response.data;
                });
            }

		function getHunters() {
			return $http.get(api)
			    .then(function(response){
                    return response.data;
                })
                .catch(fail);
		}

        function fail(reason) {
            toastr.err("Failed to retrieve hunters from server.", reason);
        }

		function addHunter(hunter) {
		    console.log("Service (hunter): ", hunter);
			return $http.post(api, hunter)
				.then(function(response) {
					return response.data;
				})
				.catch(onSaveFailed);
		}

		function onSaveFailed(response) {
		    toastr.err("Failed to save hunter to server. (HTTP status: " + response.status + ")");
		}

		function updateHunter(hunter) {
			return $http.patch(api + hunter._id, hunter)
				.then(function (response) {
					return response.status;
				})
				.catch(onSaveFailed);
		}

		function removeHunter(hunterId) {

		}
	}
})();
