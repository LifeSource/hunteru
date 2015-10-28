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
		vm.cancel = goToListView;
		vm.submit = submit;
		vm.addNen = addNen;
		vm.addAbility = addAbility;
		vm.addOccupation = addOccupation;

		activate();

		function activate() {
			var promises = [getNenTypes(), getOccupations()];
			$q.all(promises).then(function() {
				var ctx = document.getElementById("nen").getContext("2d");
                var nenChart = new Chart(ctx).Radar(getData(), getOptions());
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

		function addAbility(ability) {
			vm.hunter.abilities.push(ability);
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
					    goToListView();
					});
			} else {
				toastr.error("The form contains invalid data. Please correct the data and try again.");
			}
		}

		function clear() {
			vm.hunter = {};
		}

		function goToListView() {
			$state.go("home");
		}

		function getData() {
            var data = {
                labels: ["Enhancer", "Transmutter", "Conjurer", "Specialist", "Manipulator", "Emitter"],
                datasets: [{
                    fillColor: "rgba(58,141,224,0.4)",
                    strokeColor: "rgba(20,220,220,1)",
                    pointColor: "rgba(200,0,0,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    //data: vm.hunter.nenData
                    data: [vm.hunter.nenData[0], vm.hunter.nenData[2],vm.hunter.nenData[1],vm.hunter.nenData[3],vm.hunter.nenData[4],vm.hunter.nenData[5]]
                }]
            };

            return data;
        }

        function getOptions() {

            var options = {
                scaleFontSize: 64,
                pointLabelFontSize: 14
            };

            return options;
        }


	}
}());
