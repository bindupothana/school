
var app= angular.module('schoolApp'); 
app.service('schoolService', function($http,$q) {
    this.getSchoolInfo= function() {
        return  $http.get('school.json').success(function(response){
        	console.log(response.data);
        })
         }
    
});



