(function() {
	"use strict";

	angular
		.module("app.hunter")
		.controller("HunterInfoController", HunterInfoController);

	HunterInfoController.$inject = ["$q", "dataService", "hunter", ];

	function HunterInfoController($q, dataService, hunter) {

		var vm = this;
		vm.nenTypes = [];
		vm.hunter = hunter;
	
		activate();

		function activate() {

			var promises = [getNenTypes()];

			$q.all(promises).then(function() {
				toastr.info("Hunter info view activated");
			});
		}

		function getNenTypes() {
			return dataService.getNenTypes().then(function(data) {
				vm.nenTypes = data;
				return vm.nenTypes;
			});
		}
	}
	
}());
