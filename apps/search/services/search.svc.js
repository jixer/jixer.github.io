angular.module('app.services')

	.factory('searchSvc', [function() {
	    var searchServiceInstance = {};
	    
	    // public methods
	    searchServiceInstance.get = function () {
	        var providers;
	        var providerString = localStorage.getItem("providers");
	        if (providerString != null) {
	            providers = JSON.parse(providerString);
	        }
	        else {
	            providers = _loadDefaultProviders();
	        }
	        return providers;
	    }
	    
	    searchServiceInstance.saveAll = function(providers) {
	        var providerString = JSON.stringify(providers);
	        localStorage.setItem("providers", providerString);
	    }
	    
	    searchServiceInstance.add = function(provider) {
	    	provider._id = _guid();
	    	
	    	var providers = searchServiceInstance.get();
	    	providers.push(provider);
	    	searchServiceInstance.saveAll(providers);
	    }
	    
	    searchServiceInstance.remove = function(providerGuid) {
	    	var providers = searchServiceInstance.get();
	    	
	    	if (_removeFromArray(providers, providerGuid)) 
	    		searchServiceInstance.saveAll(providers);
	    }
	    
	    // private methods
	    function _removeFromArray(arr, lookup) {
	    	for (var i = 0; i < arr.length; i++) {
	    		if (arr[i]._id == lookup) {
	    			arr.splice(i, 1);
	    			return true;
	    		}
	    	}
	    	
	    	return false;
	    }
	    
	    function _loadDefaultProviders() {
	        var providers = [{
	            _id: _guid(),
	            title: "MSDN",
	            domain: "msdn.microsoft.com"
	        }];
	        searchServiceInstance.saveAll(providers);
	        return providers;
	    }
	    
	    function _guid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
        }
	    
	    return searchServiceInstance;
	}]);