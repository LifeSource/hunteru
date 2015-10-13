(function() {
	"use strict";

	angular
		.module("app.hunter")
		.controller("HunterEditController", HunterEditController);

	HunterEditController.$inject = ["$q", "$state", "$stateParams", "dataService", "hunterService"];

	function HunterEditController($q, $state, $stateParams, dataService, hunterService) {

		var vm = this;
		vm.title = "New";
		vm.hunter = {};
		vm.cancel = cancel;
		vm.clear = clear;
		vm.submit = submit;
		
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
		
		function submit(isValid) {
			if (isValid) {
				hunterService.post("/api/hunters/", vm.hunter)
					.then(function () {
						toastr.success("Data submitted successfully!");		
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
