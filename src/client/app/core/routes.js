/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
(function () {
	"use strict";
	
	angular
		.module("app.core")
		.config(routes);
		
	routes.$inject = ["$stateProvider", "$urlRouterProvider"];
	
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
			.state("newHunter", {
				url: "/hunters/new",
				templateUrl: "app/hunter/hunterEdit.html",
				controller: "HunterEditController",
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
						return hunterService.get(hunterId);
					}
				}
			});			
	}
	
})();
