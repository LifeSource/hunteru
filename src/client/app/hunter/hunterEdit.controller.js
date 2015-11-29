(function() {
	"use strict";

	angular
		.module("app.hunter")
		.controller("HunterEditController", HunterEditController);

	HunterEditController.$inject = ["$q", "$state", "$stateParams", "dataService", "hunterService", "Hunter"];

	function HunterEditController($q, $state, $stateParams, dataService, hunterService, Hunter) {

		var vm = this;
		vm.cancel = goToListView;
		vm.submit = submit;
		vm.addNen = addNen;
		vm.addAbility = addAbility;
		vm.addOccupation = addOccupation;

		activate();

		function activate() {

			var hunterId = $stateParams.id;
			var promises = [getNenTypes(), getOccupations()];

			if (!hunterId) {
				vm.hunter = new Hunter();
			} else {
				promises.push(getHunterById(hunterId));
				$q.all(promises).then(function() {
					vm.title = (!hunterId) ? "New" : "Editing: " + vm.hunter.name.first;
					var ctx = document.getElementById("nen").getContext("2d");
	                var nenChart = new Chart(ctx).Radar(getData(), getOptions());
					toastr.info("Hunter Edit View activated");
				});
			}
		}

		function getHunterById(id) {
			return hunterService.get(id)
				.then(onSuccess)
				.catch(onFail);
		}

		function onSuccess(data) {
			vm.hunter = data;
			return data;
		}

		function onFail(reason) {
			toastr.error(reason);
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
			vm.ability = "";
			vm.hunter.abilities.push(ability);
		}

		function addOccupation(occupation) {
			vm.hunter.occupation = [];
			vm.hunter.occupation.push(occupation);
		}

		function submit(isValid) {
			if (isValid) {
				console.log("vm.hunter: ", vm.hunter);
				if (!vm.hunter._id) {
					hunterService.post(vm.hunter)
						.then(onSaveSuccess)
						.catch(fail);
				} else {
					hunterService.update(vm.hunter)
						.then(onSaveSuccess)
						.catch(fail);
				}
			} else {
				toastr.error("The form contains invalid data. Please correct the data and try again.");
			}
		}

		function onSaveSuccess(response) {
			toastr.success("Data saved successfully! (HTTP status: " + response.status + ")");
		    goToListView();
		}

		function fail(reason) {
			toastr.error(reason);
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
                    data: vm.hunter.nenData
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
