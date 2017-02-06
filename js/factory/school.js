
 var app = angular.module('schoolApp') 
app.factory('schoolService', function($http) { 
    return{
    	getschool:function(){
    		$http.get('school.json');
    	}
    }
    });