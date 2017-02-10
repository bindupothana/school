
 var app =angular.module('studentApp', ['ui.router']);
 app.config(function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('list', {
 	url : '/list',
  templateUrl : 'views/list.html',
  controller : 'studentCtrl'

 });
 $urlRouterProvider.otherwise('/');

 }) ;



  





