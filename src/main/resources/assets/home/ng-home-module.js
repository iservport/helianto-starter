(function() {
	app = angular.module('home', ['ui.bootstrap', 'app.layout', 'app.services', 'ngResource', 'ngSanitize', 'angular-loading-bar', 'ui.bootstrap.accordion'])
	/**
	 * Resources
	 */
	.factory('resources', ['$resource', function($resource) {
		var service = {};
		service.resource = $resource("/api/home/:method"
			, null
			, { save: { method: 'PUT'}, create: {method: 'POST' }, remove:{method:'DELETE'}});
		return service;
	}])
	/**
	 * Home controller
	 */
	.controller('HomeController', ['$scope', '$window', '$http', 'resources'
	                                  , function($scope, $window, $http, resources) {
	
		$scope.baseName = "home";
		
	}]) // HomeController

} )();
