'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.contacts',
  'myApp.favorite',
  'myApp.version',
  'myApp.core',
  'ui.router',
  'ngResource',
  'ui.bootstrap'
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', { 
    url: '/home',
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactListController'
  }).state('favorite', { 
    url: '/favorite',
    templateUrl: 'contacts/favorite.html',
    controller: 'FavoriteListController'
  }).state('editContact', { 
    url: '/editContact/:contactId',
    templateUrl: 'contacts/contacts.details.html',
    controller: 'ContactDetailsController'
  });
}).run(function($state) {
  $state.go('home'); 
});

