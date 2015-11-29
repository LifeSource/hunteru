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
			.state("hunter", {
				url: "/hunters/:id",
				templateUrl: "app/hunter/hunterEdit.html",
				controller: "HunterEditController",
				controllerAs: "vm"
			})
			.state("info", {
				url: "/hunters/info/:id",
				templateUrl: "app/hunter/hunterInfoView.html",
				controller: "HunterInfoController",
				controllerAs: "vm"
			});
	}

})();
