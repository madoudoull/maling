'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('tiaozhuan', ["ui.router"]).config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when("","/list1")
	$stateProvider.state('list1',{
		url:'/list1',
		templateUrl:'views/list1.html',
		controller: 'list1'
	}).state('list2',{
		url:'/list2',
        templateUrl:'views/list2.html',
        controller: 'list2'
	})
})