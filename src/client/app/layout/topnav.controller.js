(function() {
	"use strict";

	angular
		.module("app.layout")
		.controller("TopNavigationController", TopNavigationController);

	TopNavigationController.$inject = [];

	function TopNavigationController() {
		var vm = this;

		vm.navLinks = [
			{ label: "Home", state: "home", icon: "fa-home" },
			{ label: "+Hunter", state: "newHunter", icon: "fa-plus" }
		];
	}
}());
