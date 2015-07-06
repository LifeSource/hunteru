(function(){
	"use strict";
	
	angular
		.module("app.hunters")
		.controller("HunterListController", ["hunterService", HunterListController]);
		
	function HunterListController(hunterService) {
		
		var vm = this;
		vm.hunters = [];
		
		hunterService.getHunters().then(function(data){
			vm.hunters = data;
			return vm.hunters;
		});
		
	}
})();