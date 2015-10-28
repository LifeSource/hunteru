(function() {
    "use strict";

    angular
        .module("app.hunter")
        .controller("HunterListController", HunterListController);

    HunterListController.$inject = ["$q", "$state", "hunterService", "toastr"];

    function HunterListController($q, $state, hunterService, toastr) {
        var vm = this;
        vm.addHunter = addHunter;

        activate();

        function activate() {
            var promises = [getAllHunters()];

            $q.all(promises)
                .then(function() {});
        }

        function getAllHunters() {
            hunterService.query()
                .then(success)
                .catch(fail);
        }

        function success(data) {
            vm.hunters = data;
        }

        function fail(reason) {
            toastr.error("Failed to retrieve hunters. ", reason);
        }

        function addHunter() {
            $state.go("newHunter", {
                id: -1
            });
        }
    }

})();
