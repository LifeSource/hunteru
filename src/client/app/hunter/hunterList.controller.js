(function(){
	"use strict";
	
	angular
		.module("app.hunters")
		.controller("HunterListController", HunterListController);
		
	HunterListController.$inject = ["hunterService"];
		
	function HunterListController(hunterService) {
		
		var vm = this;
		vm.hunters = [];
		
		hunterService.getHunters().then(function(data) {
			vm.hunters = data;
		});		
	}
	
})();