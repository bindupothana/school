var app=angular.module('schoolApp', [
  'schoolApp.services',
  'schoolApp.controllers',
  'ngRoute'
])
.config( function($stateProvider,$urlRouterProvider) {
  $stateProvider
  
  

  .state('/', {
             template: '<ul><li ng-repeat="school">{{student.name}}</li><ul>',
             controller: 'schoolCtrl',
         });

  $urlRouterProvider.otherwise( '/');
});