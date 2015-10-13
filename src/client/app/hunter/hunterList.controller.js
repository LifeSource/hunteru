(function() {
    "use strict";

    angular
        .module("app.hunter")
        .controller("HunterListController", HunterListController);

    HunterListController.$inject = ["hunterService", "toastr"];

    function HunterListController(hunterService, toastr) {
        var vm = this;
        vm.hunters = [];

        hunterService.query()
            .then(success)
            .catch(fail);

        function success(data) {
            vm.hunters = data;
        }

        function fail(reason) {
            toastr.error("Failed to retrieve hunters. ", reason);
        }
    }

})();
