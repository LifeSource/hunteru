/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
(function(){
	"use strict";
	angular
		.module("app.hunters")
		.factory("hunterService", ["$http", hunterService]);
	
	function hunterService($http) {
		
		var api = "/api/hunters/";
		
		var service = {
			addHunter: addHunter,
			getHunter: getHunter,
			getHunters: getHunters,
			updateHunter: updateHunter,
			removeHunter: removeHunter
		};
		
		return service;
		
		function getHunter(hunterId) {
			return $http.get(api + hunterId).then(function(response){
				return response.data;
			});	
		}
		
		function getHunters() {
			return $http.get(api).then(function(response){
				return response.data;
			});	
		}
		
		function addHunter(hunter) {
			
		}
		
		function updateHunter(hunterId, hunter) {
						
		}
		
		function removeHunter(hunterId) {
			
		}
	}
})();