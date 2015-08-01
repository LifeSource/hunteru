(function(){
	"use strict";
	
	angular
		.module("app.hunters")
		.directive("htrHunterCard", [htrHunterCard]);
	
	function htrHunterCard() {
		
		var directive = {
			restrict: "AE",
			templateUrl: "app/hunter/hunterCardTemplate.html"
		};
		
		return directive;
	}
})();