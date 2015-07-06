(function(){
	"use strict";
	angular
		.module("app.hunters")
		.factory("configService", [configService]);
	
	function configService() {
		
		var service = {
			getTitle: getTitle,
			
		};
		
		return service;
		
		function getTitle() {
			return "Hunteru";
		}
	}
	
})();