(function(){
	"use strict";
	
	angular
		.module("app.hunters")
		.directive("htrHunterCard", [htrHunterCard]);
	
	function htrHunterCard() {
		
		var directive = {
			restrict: "AE",
			templateUrl: "app/hunter/hunterCardTemplate.html",
			controller: function(){}
	//		controller: "HunterCardController as vm"
		};
		
		return directive;
	}
})();