angular.module('app.features.home.create')

	.controller('HomeCreateCtrl', [
		'$scope',
		'$uibModalInstance',
		function ($scope, $uibModalInstance) {
			$scope.item = {};
			
			$scope.ok = function () {
				$uibModalInstance.close($scope.item);
			}
			
			$scope.cancel = function() {
				$uibModalInstance.dismiss('cancel');
			}
		}
	]);