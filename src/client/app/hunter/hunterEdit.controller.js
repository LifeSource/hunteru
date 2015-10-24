(function() {
	"use strict";

	angular
		.module("app.hunter")
		.controller("HunterEditController", HunterEditController);

	HunterEditController.$inject = ["$q", "$state", "$stateParams", "dataService", "hunterService", "hunter"];

	function HunterEditController($q, $state, $stateParams, dataService, hunterService, hunter) {

		var vm = this;
		vm.title = "New";
        vm.hunter = hunter;
		vm.clear = clear;
		vm.cancel = cancel;
		vm.submit = submit;
		vm.addNen = addNen;
		vm.addOccupation = addOccupation;

		activate();

		function activate() {
			var promises = [getNenTypes(), getOccupations()];
			$q.all(promises).then(function() {
				toastr.info("Hunter Edit View activated");
			});
		}

		function getNenTypes() {
			return dataService.getNenTypes()
				.then(function(data) {
					vm.nenTypes = data;
					return vm.nenTypes;
				});
		}

		function getOccupations() {
			return dataService.getOccupations()
				.then(function(data) {
					vm.occupations = data;
					return vm.occupations;
				});
		}

		function addNen(nenType) {
			vm.hunter.nen = [];
			vm.hunter.nen.push(nenType);
		}

		function addOccupation(occupation) {
			vm.hunter.occupation = [];
			vm.hunter.occupation.push(occupation);
		}

		function submit(isValid) {
			if (isValid) {
                console.log("vm.hunter: ", vm.hunter);
				hunterService.post(vm.hunter)
					.then(function (response) {
						toastr.success("Data submitted successfully! (HTTP status: " + response.status + ")");
					});
			} else {
				toastr.error("The form contains invalid data. Please correct the data and try again.");
			}
		}

		function clear() {
			vm.hunter = {};
		}

		function cancel() {
			$state.go("home");
		}
	}
}());
