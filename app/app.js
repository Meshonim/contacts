'use strict';


angular.module('contactApp', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'blockUI'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider, blockUIConfig) {
  blockUIConfig.autoInjectBodyBlock = false;
  blockUIConfig.blockBrowserNavigation = true;
  blockUIConfig.message = 'Please wait for operation';
 
  $stateProvider.state('home', { 
    url: '/home',
    component: 'contactPage'
  }).state('favorite', { 
    url: '/favorite',
    component: 'favoritePage'
  }).state('updateContact', { 
    url: '/updateContact/:contactId',
    component: 'updatePage',
  }).state('addContact', { 
    url: '/addContact',
    component: 'addPage',
  });
   $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
});

