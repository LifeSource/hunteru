(function() {
	"use strict";

	angular
		.module("app.layout")
		.directive("htrMenuItem", htrMenuItem);

	htrMenuItem.$inject = [];

	function htrMenuItem() {

		var directive = {
			restrict: "AE",
			scope: {
				label: "@",
				icon: "@"
			},
			templateUrl: "app/layout/htrMenuItem.html"
		};

		return directive;
	}
}());