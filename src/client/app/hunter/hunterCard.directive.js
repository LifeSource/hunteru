(function(){
	"use strict";
	
	angular
		.module("app.hunter")
		.directive("htrHunterCard", htrHunterCard);
	
    htrHunterCard.$inject = [];

	function htrHunterCard() {
		
		var directive = {
			restrict: "AE",
			templateUrl: "app/hunter/hunterCard.template.html"
		};
		
		return directive;
	}
})();
