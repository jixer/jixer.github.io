angular.module('app.features.home', ['app.services', 'app.features.home.create', 'ui.bootstrap', 'ngAnimate'])

	.config(['$stateProvider',
		function ($stateProvider) {
			$stateProvider
				.state('home', {
					url: "/",
					templateUrl: "features/home/home.tpl.html",
					controller: 'HomeCtrl'
				});
		}
	]);