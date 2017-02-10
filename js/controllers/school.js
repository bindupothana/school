 var app = angular.module('studentApp');
 app.controller('studentCtrl',function($http,$scope, studentFactory)
 {                      
     $scope.getSchool=function(){
        studentFactory.getStudentFactory().then(function(resp){
          $scope.schoolList = resp;
          console.log("$scope.schoolList", $scope.schoolList)
        });
        
    }
    $scope.getSchool();
  
 });
