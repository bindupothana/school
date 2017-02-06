var app = angular.module('schoolApp')

app.controller('schoolCtrl', function($scope, $http,schoolService){

       schoolService.getschool();

	
	error(function(data,status){    
		console.error('Fail to load data', status, data);    
		$scope.school = { };     
	}) 





});    