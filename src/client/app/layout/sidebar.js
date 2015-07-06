(function(){
	"use strict";
	angular
		.module("app.layout")
		.controller("SideBar", [SideBar]);
		
	function SideBar() {
		var vm = this;
		
		vm.menuItems = [
			{ label: "Home", icon: "fa-home"},
			{ label: "About", icon: "fa-fax"}	
		];
	}
})();