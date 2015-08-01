/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
(function () {
	"use strict";
	
	angular
		.module("app.core")
		.config(["$stateProvider", "$urlRouterProvider", routes]);
		
	function routes($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "app/hunter/hunterListView.html",
				controller: "HunterListController",
				controllerAs: "vm"
			})
			.state("hunterList", {
				url: "/hunterList",
				templateUrl: "app/hunter/hunterListView.html",
				controller: "HunterListController",
				controllerAs: "vm"
			})
			.state("info", {
				url: "/hunters/:hunterId",
				templateUrl: "app/hunter/hunterInfoView.html",
				controller: "HunterInfoController as vm",
				resolve: {
					hunterService: "hunterService",
					hunter: function(hunterService, $stateParams) {
						var hunterId = $stateParams.hunterId;
						return hunterService.getHunter(hunterId);
					}
				}
			});			
	}
	
})();
