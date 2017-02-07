
 var app = angular.module('schoolApp');
app.factory('schoolFactory', function($q, schoolService) {
var factory={};
	factory.getSchoolFactory = function() {
		var deferred = $q.defer();
		schoolService.getSchoolInfo().then(
          function(successInfo) { 
          	console.log(successInfo.data)
              deferred.resolve(successInfo.data);
          },
          function(errorInfo) {
               deferred.reject([]);
          });
     return deferred.promise;
	}
	return factory;
    
    });