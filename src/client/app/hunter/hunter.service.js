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
            console.error("Failed to retrieve hunters from server.", reason);
        }

		function addHunter(hunter) {
			return $http.post(api, hunter)
				.then(function(response) {
					return response.status;
				});
			
		}
		
		function updateHunter(hunterId, hunter) {
						
		}
		
		function removeHunter(hunterId) {
			
		}
	}
})();
