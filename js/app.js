angular.module('schoolApp', [
  'ui.router'
])
.config( function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('/', {
             template: '<ul><li ng-repeat="school">{{student.name}}</li><ul>',
             controller: 'schoolCtrl',
         });

  $urlRouterProvider.otherwise( '/');
});