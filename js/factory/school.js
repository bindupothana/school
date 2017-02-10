 var app = angular.module('studentApp');
app.factory('studentFactory', function($q, studentService) {
var factory={};
var schoolNameMap = {};
var studentNameMap={};

function isExistKey(mapname, key){
      return mapname[key];
    }
   factory.getStudentFactory = function() {
       
       var deferred = $q.defer();
       studentService.getSchoolInfo().then(
        function(successInfo) {
            console.log(successInfo.data)

 

   for(var i=0; i< successInfo.data.length; i++){
          console.log(successInfo.data[i].school_name)    
          var roleMap = isExistKey(schoolNameMap, successInfo.data[i].school_name);
          if(roleMap){
       var roleList = isExistKey(roleMap, successInfo.data[i].role);
       if(roleList){
         roleList.push(successInfo.data[i]);
       }else{
         roleList = [];
         roleList.push(successInfo.data[i]);
       }
              
       roleMap[successInfo.data[i].role] = roleList;
              schoolNameMap[successInfo.data[i].school_name] = roleMap;
          } else{
              var roleList = [];
              roleList.push(successInfo.data[i]);
       var roleMap = {};
       roleMap[successInfo.data[i].role] = roleList;
              schoolNameMap[successInfo.data[i].school_name] = roleMap;
          }
   }


      console.log(schoolNameMap)

            deferred.resolve(schoolNameMap);
        },
        function(errorInfo) {
             deferred.reject([]);
        });
   return deferred.promise;
   }

   return factory;
   
   

});