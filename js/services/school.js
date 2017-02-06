
var app= angular.module('schoolApp') 
app.service('schoolService', function($http) {
    this.getSchool= function() {
         $http.get('school.json').then(function(resp){
           console.log(resp)
       })

         }
    
    


});



