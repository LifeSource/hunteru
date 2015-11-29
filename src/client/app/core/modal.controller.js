(function () {
    "use strict";

    angular
        .module("app.hunter")
        .controller("ModalController", ModalController);

    ModalController.$inject = ["$uibModalInstance", "hunter"];

    function ModalController($uibModalInstance, hunter) {
        var vm = this;

        vm.hunter = hunter;

        vm.ok = function () {
            $uibModalInstance.close(vm.hunter);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss("Cancel");
        };
    }
})();
