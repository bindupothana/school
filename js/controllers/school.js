var app = angular.module('schoolApp');

app.controller('schoolCtrl', function($scope, schoolFactory){
	

     $scope.getSchool=function(){


schoolFactory.getschoolFactory().then(function(resp){
        	$scope.schoolList = resp;
        	console.log("$scope.schoolList", $scope.schoolList)
        });
        
    }


     	/*$scope.schoolList = schoolFactory.getSchoolFactory();
     	console.log("$scope.schoolList", $scope.schoolList)
     }*/
 $scope.getSchool();

});
 






 /*  $scope.getSchool=[
   title:"prasanthi vidya vihar",
   
   items:[{"item-title":"student"}]
   items:[{"item-title":"teacher"}]
   items:[{"item-title":"class"}]
}
];*/






