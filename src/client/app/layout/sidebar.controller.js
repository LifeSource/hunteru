(function(){
	"use strict";
	angular
		.module("app.layout")
		.controller("SideBarController", [SideBarController]);
		
	function SideBarController() {
		
		var vm = this;
		
		vm.menuItems = [
			{ label: "Home", icon: "fa-home"},
			{ label: "About", icon: "fa-fax"}	
		];
	}
})();