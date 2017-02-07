var app = angular.module('schoolApp');

app.controller('schoolCtrl', function($scope, schoolFactory){
	

     $scope.getSchool=function(){
     	schoolFactory.getSchoolFactory().then(function(resp){
     		$scope.schoolList = resp;
     		console.log("$scope.schoolList", $scope.schoolList)
     	});
     	
     }

   $scope.getSchool();



});    