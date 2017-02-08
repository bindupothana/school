var app = angular.module('schoolApp');

app.controller('schoolCtrl', function($scope, schoolFactory){
	

     $scope.getSchool=function(){
     	$scope.schoolList = schoolFactory.getSchoolFactory();
     	console.log("$scope.schoolList", $scope.schoolList)
     }

     
   $scope.getSchool();



});    