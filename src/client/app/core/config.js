(function() {
	"use strict";

	angular.module("app.core")
		.config(toastrConfig);

		toastrConfig.$inject = ["toastr"];

		function toastrConfig(toastr) {
			toastr.options.timeOut = 3000; 
			toastr.options.positionClass = "toast-bottom-right";
		}
})();

