(function() {
	"use strict";

	angular
		.module("app.layout")
		.controller("TopNavigationController", TopNavigationController);

	TopNavigationController.$inject = [];

	function TopNavigationController() {
		var vm = this;

		vm.navLinks = [
			{ label: "Hunter List", state: "newHunter", icon: "fa-plus" },
			{ label: "Add", state: "newHunter", icon: "fa-plus" },
			{ label: "About", state: "newHunter", icon: "fa-plus" }
		];
	}
}());
