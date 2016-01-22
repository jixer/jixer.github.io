angular.module('app.features.home')

	.controller('HomeCtrl', [
		'$scope',
		'searchSvc',
		'$uibModal',
		function ($scope, searchSvc, $uibModal) {
			$scope.providers = searchSvc.get();
			
			$scope.search = function(provider) {
				var url = "http://google.com/?q=site:" + provider.domain + " " + provider.search;
				window.open(url, '_blank');
			}
			
			$scope.create = function() {
				var modalInstance = $uibModal.open({
					animation: true,
					templateUrl: 'features/home/create/create.tpl.html',
					controller: 'HomeCreateCtrl'
				});
				
				modalInstance.result.then(function(newProvider){
					$scope.providers.push(newProvider);
					searchSvc.add(newProvider);
				});
			}
			
			$scope.remove = function(providerId) {
				searchSvc.remove(providerId);
				_removeFromArray($scope.providers, providerId);
			}
			
			function _removeFromArray(arr, lookup) {
		    	for (var i = 0; i < arr.length; i++) {
		    		if (arr[i]._id == lookup) {
		    			arr.splice(i, 1);
		    			return true;
		    		}
		    	}
		    	
		    	return false;
		    }
		}
	]);