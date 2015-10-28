(function () {
    "use strict";

    angular
        .module("app.hunter")
        .factory("hunter", hunter);

    hunter.$inject = [];

    function hunter() {
        var hunterModel = {
            name: {
                first: null,
                last: null,
            },
            age: 0,
            gender: "Male",
            nen: [],
            nenData: [0, 0, 0, 0, 0, 0],
            occupation: [],
            abilities: [],
            bio: null
        };

        return hunterModel;
    }

})();
