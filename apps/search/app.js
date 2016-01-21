angular.module('app', [
	'templates',
	'ui.router',
	'app.features.home',
	'app.features.signin',
	'app.features.auth'
])

	.config([
		'$urlRouterProvider',
		function ($urlRouterProvider) {
			// For any unmatched url, redirect to /
			$urlRouterProvider.otherwise('/');
		}
	])

	.constant('STATUS', {
		info: 'info',
		loading: 'loading',
		error: 'error',
		warning: 'warning',
		success: 'success',
		idle: null
	})

	.run([
		'$rootScope',
		'$state',
		function ($rootScope, $state) {
			// Router events
			$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
				console.log('$stateChangeError - fired when an error occurs during transition.');
				console.log(arguments);
			});
			$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
				console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
				console.log(unfoundState, fromState, fromParams);
			});
		}
	]);