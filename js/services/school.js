
var app= angular.module('schoolApp') 
angular.factory('schoolService', function($http) {
    this.getschoolData = function() {
         $http.get('school.json');
    },
    


})
