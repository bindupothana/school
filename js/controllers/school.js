var app = angular.module('schoolApp', [ ]);

app.controller('schoolCtrl', ['$scope','$http',function($scope, $http,studentService){
    
  $http.get('school.json') 
  .success(function(data){    
     $scope.school = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.school = { };     
   }) 
$scope.showresults = function(){
	
}



 }];    