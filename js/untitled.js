var app = angular.module('schoolApp');
app.factory('schoolFactory', function($q, schoolService) {
var factory={};
	factory.getSchoolFactory = function() {
    [
{
 "school":"pvs grand school":["id":"1","name":"lilly","role": "student","class":"10","teacher":"XYZ"]},
{"school":"svs grand school":["id":"2","name":"abc","role": "student","class":"10","teacher":"XYZ"]}
{"school":"hjg grand school":["id":"3","name":"def","role": "student","class":"10","teacher":"XYZ"]}
{"school":"kkk grand school":["id":"4","name":"ghi","role": "student","class":"10","teacher":"XYZ"]}
{"school":"mno grand school":["id":"5","name":"klm","role": "student","class":"10","teacher":"XYZ"]}
{"school":"prasanthi grand school":["id":"6","name":"nopq","role": "student","class":"10","teacher":"XYZ"]}

 
]



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