(function() {
    "use strict";

    angular
        .module("app.hunter")
        .controller("HunterInfoController", HunterInfoController);

    HunterInfoController.$inject = ["$q", "$state", "$stateParams", "$uibModal", "dataService", "hunterService"];

    function HunterInfoController($q, $state, $stateParams, $uibModal, dataService, hunterService) {

        var vm = this;
        vm.nenTypes = [];
        vm.editHunter = editHunter;
        vm.deleteHunter = deleteHunter;

        activate();

        function activate() {

            var hunterId = $stateParams.id;
            var promises = [getHunter(hunterId), getNenTypes()];

            $q.all(promises).then(function() {
                toastr.info("Hunter info view activated");
                var ctx = document.getElementById("nen").getContext("2d");
                var nenChart = new Chart(ctx).Radar(getData(), getOptions());
            });

        }

        function getHunter(id) {
            return hunterService.get(id)
                .then(onSuccess)
                .catch(onFail);
        }

        function getNenTypes() {
            return dataService.getNenTypes()
                .then(function(data) {
                    vm.nenTypes = data;
                    return vm.nenTypes;
                })
                .catch(onFail);
        }

        function onSuccess(data) {
            vm.hunter = data;
            return data;
        }

        function onFail(reason) {
            toastr.err(reason);
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

        function editHunter(id) {
            $state.go("hunter", { id: id });
        }

        function deleteHunter() {
            openDeleteModal("md");
        }

        function openDeleteModal(size) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "app/core/modal.html",
                controller: "ModalController as vm",
                size: size,
                resolve:  {
                    hunter: function () {
                        return vm.hunter;
                    }
                }
            });

            modalInstance.result
                .then(function (hunter) {
                    vm.hunter = hunter;
                    return hunterService.delete(vm.hunter._id)
                        .then(onComplete)
                        .catch(onError);
                }, function () {
                    toastr.info("Delete operation cancelled!");
                });
        }

        function onComplete(response) {
            toastr.success("Hunter removed successfully!");
            $state.go("home");
        }

        function onError(reason) {
            toastr.error(reason);
        }
    }

}());
