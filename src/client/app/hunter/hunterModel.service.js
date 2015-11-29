(function () {
    "use strict";

    angular
        .module("app.hunter")
        .value("Hunter", Hunter);

    Hunter.$inject = [];

    function Hunter() {
        this.name =  { first: null, last: null, };
        this.age = 0;
        this.gender = "Male";
        this.nen = [];
        this.nenData = [0, 0, 0, 0, 0, 0],
        this.occupation = [];
        this.abilities = [];
        this.bio = null;
    };

})();
