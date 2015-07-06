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
				templateUrl: "app/hunter/hunterListView.html"
			});			
	}
	
})();